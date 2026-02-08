<template>
  <div class="mysql-mvcc-view">
    <v-card class="mx-auto" elevation="2">
      <v-card-title class="d-flex align-center justify-space-between pa-6">
        <div class="d-flex align-center">
          <v-icon color="primary" size="32" class="mr-3">mdi-database</v-icon>
          <div>
            <div class="text-h5 font-weight-bold">MySQL MVCC 科普动画</div>
            <div class="text-subtitle-1 text-medium-emphasis mt-1">
              用最简单的方式理解多版本并发控制
            </div>
          </div>
        </div>
        <div class="d-flex align-center gap-3">
          <v-btn
            :color="isPlaying ? 'error' : 'success'"
            :prepend-icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
            @click="toggleAnimation"
            variant="tonal"
            size="large"
          >
            {{ isPlaying ? '⏸️ 暂停' : '▶️ 开始' }}
          </v-btn>
          <v-btn
            color="primary"
            prepend-icon="mdi-restart"
            @click="resetAnimation"
            variant="tonal"
            size="large"
          >
            🔄 重播
          </v-btn>
          <div class="speed-control">
            <v-icon size="20" class="mr-2">mdi-speedometer</v-icon>
            <span class="speed-label mr-2">速度:</span>
            <v-btn-toggle
              v-model="playbackSpeed"
              variant="outlined"
              density="compact"
              mandatory
              @update:model-value="onSpeedChange"
            >
              <v-btn value="0.5" size="small">0.5x</v-btn>
              <v-btn value="0.75" size="small">0.75x</v-btn>
              <v-btn value="1" size="small">1x</v-btn>
              <v-btn value="1.5" size="small">1.5x</v-btn>
              <v-btn value="2" size="small">2x</v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </v-card-title>

      <v-card-text class="pa-0">
        <div class="story-container">
          <!-- 故事场景说明 -->
          <div class="story-header" :class="{ active: currentStep }">
            <div class="story-title">
              <span class="story-icon">{{ currentStep?.emoji || '📚' }}</span>
              <div class="story-text">
                <div class="story-main-title">{{ currentStep?.storyTitle || '准备开始故事...' }}</div>
                <div class="story-subtitle">{{ currentStep?.storyDesc || '点击开始按钮，让我们用故事的方式理解 MVCC' }}</div>
              </div>
            </div>
            <div class="story-progress">
              <div class="progress-info">
                <span class="progress-label">故事进度</span>
                <span class="progress-value">{{ currentStepIndex + 1 }} / {{ currentSteps.length }}</span>
              </div>
              <div class="progress-bar-wrapper">
                <div 
                  class="progress-bar-fill" 
                  :style="{ width: `${((currentStepIndex + 1) / currentSteps.length) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- 主故事场景 -->
          <div class="story-scene">
            <!-- 左侧：角色介绍 -->
            <div class="characters-panel">
              <div class="character-card main-character" :class="{ active: currentTrxId > 0 }">
                <div class="character-avatar">
                  <span class="avatar-emoji">👤</span>
                </div>
                <div class="character-info">
                  <div class="character-name">你（查询者）</div>
                  <div class="character-id">ID: {{ currentTrxId || '---' }}</div>
                  <div class="character-status">
                    <v-chip v-if="currentTrxId" color="primary" size="small" variant="tonal">
                      🔍 正在查询
                    </v-chip>
                  </div>
                </div>
              </div>

              <div class="character-card readview-card" :class="{ active: readViewActive }">
                <div class="character-avatar">
                  <span class="avatar-emoji">📸</span>
                </div>
                <div class="character-info">
                  <div class="character-name">你的"快照相机"</div>
                  <div class="character-desc">ReadView</div>
                  <div class="snapshot-info">
                    <div class="snapshot-item">
                      <span class="snapshot-label">📋 活跃事务名单</span>
                      <div class="snapshot-list">
                        <span
                          v-for="(trxId, idx) in readViewActiveTrxIds"
                          :key="idx"
                          :class="['snapshot-badge', { comparing: trxId === comparingTrxId }]"
                        >
                          {{ trxId }}
                        </span>
                        <span v-if="readViewActiveTrxIds.length === 0" class="empty-badge">暂无</span>
                      </div>
                    </div>
                    <div class="snapshot-item">
                      <span class="snapshot-label">📊 最小ID: {{ readViewMinTrxId || '---' }}</span>
                    </div>
                    <div class="snapshot-item">
                      <span class="snapshot-label">📊 最大ID: {{ readViewMaxTrxId || '---' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 中间：数据版本故事 -->
            <div class="data-story-panel">
              <div class="story-section-title">
                <span class="title-emoji">📖</span>
                <span>数据版本故事</span>
              </div>
              
              <div class="version-story">
                <!-- 版本卡片 -->
                <div
                  v-for="(version, idx) in visibleVersions"
                  :key="idx"
                  :class="['version-story-card', {
                    active: version.active,
                    comparing: version.trxId === comparingTrxId,
                    visible: version.visible,
                    found: version.found
                  }]"
                >
                  <!-- 版本故事 -->
                  <div class="story-content">
                    <div class="story-header-card">
                      <div class="story-number">第 {{ idx + 1 }} 个版本</div>
                      <div class="story-author">由事务 {{ version.trxId }} 创建</div>
                    </div>
                    
                    <div class="story-body">
                      <div class="story-data">
                        <div class="data-item">
                          <span class="data-icon">🆔</span>
                          <span class="data-text">id: {{ version.data.id }}</span>
                        </div>
                        <div class="data-item highlight">
                          <span class="data-icon">📝</span>
                          <span class="data-text">name: {{ version.data.name }}</span>
                        </div>
                      </div>
                      
                      <div v-if="version.rollPtr" class="story-link">
                        <v-icon size="20" color="primary">mdi-arrow-down</v-icon>
                        <span class="link-text">指向历史版本 {{ version.rollPtr }}</span>
                      </div>
                    </div>
                    
                    <!-- 状态标签 -->
                    <div v-if="version.visible" class="story-badge success">
                      <span class="badge-emoji">✅</span>
                      <span>这个版本你可以看到！</span>
                    </div>
                    
                    <div v-if="version.trxId === comparingTrxId" class="story-badge checking">
                      <span class="badge-emoji">🔍</span>
                      <span>正在检查这个版本...</span>
                    </div>
                  </div>
                </div>
                
                <!-- 空状态 -->
                <div v-if="visibleVersions.length === 0" class="empty-story">
                  <div class="empty-emoji">📭</div>
                  <div class="empty-text">还没有数据版本</div>
                </div>
              </div>

              <!-- 知识点科普 - 显示在核心动画区域 -->
              <div class="knowledge-card-inline" :class="{ active: currentStep }">
                <div class="card-title">
                  <span class="title-emoji">💡</span>
                  <span>知识点科普</span>
                </div>
                <div class="knowledge-content">
                  <div v-if="currentStep && currentStep.keyPoints" class="knowledge-list">
                    <div
                      v-for="(point, idx) in currentStep.keyPoints"
                      :key="idx"
                      :class="['knowledge-item', { show: keyPointIndex >= idx }]"
                    >
                      <span class="knowledge-icon">✨</span>
                      <span class="knowledge-text">{{ point }}</span>
                    </div>
                  </div>
                  <div v-else class="empty-knowledge">
                    <div class="empty-emoji">📚</div>
                    <div class="empty-text">等待故事开始...</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：故事步骤 -->
            <div class="knowledge-panel">
              <!-- 故事步骤 -->
              <div class="steps-story-card">
                <div class="card-title">
                  <span class="title-emoji">🎬</span>
                  <span>故事步骤</span>
                </div>
                <div class="steps-story-list">
                  <div
                    v-for="(step, idx) in currentSteps"
                    :key="idx"
                    :class="['story-step-item', {
                      active: idx === currentStepIndex,
                      completed: idx < currentStepIndex
                    }]"
                  >
                    <div class="step-marker">
                      <v-icon v-if="idx < currentStepIndex" size="20" color="success">mdi-check-circle</v-icon>
                      <span v-else class="step-num">{{ idx + 1 }}</span>
                    </div>
                    <div class="step-story">
                      <div class="step-name">{{ step.title }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

// 工作流程定义 - 用故事化的方式
const workflows = {
  'snapshot-read': {
    name: '快照读执行流程',
    steps: [
      {
        title: '故事开始',
        storyTitle: '📖 故事开始：你想查询一条数据',
        storyDesc: '你（事务 100）想要查询数据库中的一条记录，就像你想看一本书的某一页',
        emoji: '📖',
        keyPoints: [
          '想象一下：你是一个读者，想要查看一本书的某一页',
          'MySQL 给你分配了一个"读者编号"：事务 ID 100',
          '同时，系统会记录下"现在有哪些人正在修改这本书"',
          '这个记录很重要，因为它决定了你能看到什么内容',
        ],
        setup: () => {
          currentTrxId.value = 100;
          speedTimeout(() => {
            readViewActiveTrxIds.value = [98, 99];
            readViewMinTrxId.value = 95;
            readViewMaxTrxId.value = 100;
            readViewActive.value = true;
          }, 800);
        },
        duration: 3000,
      },
      {
        title: '拍一张快照',
        storyTitle: '📸 拍一张"快照"：记录当前状态',
        storyDesc: '系统为你拍了一张"快照"（ReadView），记录下当前所有正在修改数据的人',
        emoji: '📸',
        keyPoints: [
          '就像拍照一样，系统为你拍了一张"快照"（ReadView）',
          '快照里记录了：现在有哪些人正在修改数据（活跃事务：98、99）',
          '还记录了：最小的事务 ID（95）和最大的事务 ID（100）',
          '这个快照在整个查询过程中都不会变，保证你看到的数据是一致的',
        ],
        setup: () => {
          readViewActive.value = true;
          readViewActiveTrxIds.value = [98, 99];
          readViewMinTrxId.value = 95;
          readViewMaxTrxId.value = 100;
        },
        duration: 3500,
      },
      {
        title: '找到最新版本',
        storyTitle: '🔍 找到最新版本：看看最新的数据',
        storyDesc: '你找到了数据的最新版本，但这个版本可能不是你想要的',
        emoji: '🔍',
        keyPoints: [
          '你找到了数据的最新版本，就像找到了书的最新一页',
          '这个版本显示：name = "Alice"，是由事务 99 修改的',
          '但是，事务 99 可能还在修改中，还没"提交"（就像作者还在写这一页）',
          '所以你需要判断：这个版本你能看到吗？',
        ],
        setup: () => {
          visibleVersions.value = [{
            trxId: 99,
            data: { id: 1, name: 'Alice' },
            rollPtr: '0x1234',
            active: true,
            visible: false,
            found: false,
          }];
        },
        duration: 3000,
      },
      {
        title: '判断能否看到',
        storyTitle: '🤔 判断能否看到：检查版本是否可见',
        storyDesc: '系统检查：这个版本是由谁修改的？这个人还在修改中吗？',
        emoji: '🤔',
        keyPoints: [
          '系统开始检查：这个版本（trx_id=99）你能看到吗？',
          '检查规则很简单：如果修改者还在"活跃名单"里，说明他还在修改，你看不到',
          '就像：如果作者还在写这一页，你就看不到他正在写的内容',
          '结果：事务 99 在活跃名单 [98, 99] 中 → 你看不到这个版本，需要找历史版本',
        ],
        setup: () => {
          comparingTrxId.value = 99;
          speedTimeout(() => {
            visibleVersions.value[0].visible = false;
          }, 2000);
        },
        duration: 4000,
      },
      {
        title: '翻看历史版本',
        storyTitle: '📚 翻看历史版本：找到你能看到的版本',
        storyDesc: '通过"指针"找到历史版本，就像翻看书的上一页',
        emoji: '📚',
        keyPoints: [
          '既然最新版本看不到，那就找历史版本吧！',
          '每个版本都有一个"指针"（roll_ptr），指向它的上一个版本',
          '就像书的每一页都有页码，你可以翻到上一页',
          '找到了历史版本：name = "Alice_old"，是由事务 95 修改的',
        ],
        setup: () => {
          comparingTrxId.value = null;
          speedTimeout(() => {
            visibleVersions.value.push({
              trxId: 95,
              data: { id: 1, name: 'Alice_old' },
              active: true,
              visible: false,
              found: false,
            });
            visibleVersions.value[0].active = false;
          }, 1500);
        },
        duration: 3500,
      },
      {
        title: '再次判断',
        storyTitle: '✅ 再次判断：这个历史版本能看到吗？',
        storyDesc: '检查历史版本：这个版本的修改者已经完成修改了吗？',
        emoji: '✅',
        keyPoints: [
          '检查历史版本（trx_id=95）：这个版本你能看到吗？',
          '判断规则：如果修改者不在活跃名单里，且 ID 小于最小 ID，说明已经完成了',
          '就像：如果作者已经写完并发布了这一页，你就能看到了',
          '结果：事务 95 不在活跃名单中，且 95 < 95 → 这个版本你可以看到！',
        ],
        setup: () => {
          comparingTrxId.value = 95;
          speedTimeout(() => {
            visibleVersions.value[1].visible = true;
            visibleVersions.value[1].found = true;
            visibleVersions.value[0].active = false;
          }, 2000);
        },
        duration: 4000,
      },
      {
        title: '返回结果',
        storyTitle: '🎉 返回结果：你看到了历史版本的数据',
        storyDesc: '系统返回你能看到的版本数据，即使别人已经修改了，你看到的还是你开始查询时的数据',
        emoji: '🎉',
        keyPoints: [
          '恭喜！你成功看到了数据的历史版本',
          '这就是 MVCC 的"快照读"：即使别人修改了数据，你看到的还是你开始查询时的"快照"',
          '就像：即使作者后来修改了书的内容，你看到的还是你开始读时的版本',
          '这就是"可重复读"（RR）隔离级别的实现原理：保证你每次读到的数据都是一样的',
        ],
        setup: () => {
          comparingTrxId.value = null;
          visibleVersions.value[1].active = true;
        },
        duration: 3000,
      },
    ],
  },
};

// 响应式状态
const isPlaying = ref(false);
const selectedWorkflow = ref('snapshot-read');
const currentSteps = ref<any[]>([]);
const currentStepIndex = ref(-1);
const currentStep = computed(() => currentSteps.value[currentStepIndex.value] || null);
const currentTrxId = ref(0);
const keyPointIndex = ref(-1);
const playbackSpeed = ref('1'); // 播放速度：0.5x, 0.75x, 1x, 1.5x, 2x

// ReadView 状态
const readViewActive = ref(false);
const readViewActiveTrxIds = ref<number[]>([]);
const readViewMinTrxId = ref(0);
const readViewMaxTrxId = ref(0);
const comparingTrxId = ref<number | null>(null);

// 版本链
const visibleVersions = ref<Array<{
  trxId: number;
  data: { id: number; name: string };
  rollPtr?: string;
  active: boolean;
  visible: boolean;
  found: boolean;
}>>([]);

let stepTimer: number | null = null;
let keyPointTimer: number | null = null;

// 工作流程选项
const workflowOptions = [
  { title: '快照读执行流程', value: 'snapshot-read' },
];

// 获取速度因子
const getSpeedFactor = () => {
  return 1 / parseFloat(playbackSpeed.value);
};

// 带速度控制的 setTimeout 包装函数
const speedTimeout = (callback: () => void, delay: number) => {
  return window.setTimeout(callback, delay * getSpeedFactor());
};

// 播放动画
const playAnimation = () => {
  if (!isPlaying.value || currentSteps.value.length === 0) return;
  
  currentStepIndex.value = -1;
  keyPointIndex.value = -1;
  
  const playStep = (index: number) => {
    if (!isPlaying.value || index >= currentSteps.value.length) {
      if (isPlaying.value) {
        speedTimeout(() => {
          resetAnimation();
          speedTimeout(() => {
            isPlaying.value = true;
            playAnimation();
          }, 1000);
        }, 2000);
      }
      return;
    }
    
    currentStepIndex.value = index;
    const step = currentSteps.value[index];
    keyPointIndex.value = -1;
    
    if (step.setup) {
      step.setup();
    }
    
    if (step.keyPoints) {
      step.keyPoints.forEach((_, idx) => {
        keyPointTimer = speedTimeout(() => {
          keyPointIndex.value = idx;
        }, idx * 600);
      });
    }
    
    stepTimer = speedTimeout(() => {
      playStep(index + 1);
    }, step.duration || 3500);
  };
  
  playStep(0);
};

// 切换动画
const toggleAnimation = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    playAnimation();
  } else {
    if (stepTimer) {
      clearTimeout(stepTimer);
      stepTimer = null;
    }
    if (keyPointTimer) {
      clearTimeout(keyPointTimer);
      keyPointTimer = null;
    }
  }
};

// 重置动画
const resetAnimation = () => {
  isPlaying.value = false;
  if (stepTimer) {
    clearTimeout(stepTimer);
    stepTimer = null;
  }
  if (keyPointTimer) {
    clearTimeout(keyPointTimer);
    keyPointTimer = null;
  }
  currentStepIndex.value = -1;
  keyPointIndex.value = -1;
  currentTrxId.value = 0;
  readViewActive.value = false;
  readViewActiveTrxIds.value = [];
  readViewMinTrxId.value = 0;
  readViewMaxTrxId.value = 0;
  comparingTrxId.value = null;
  visibleVersions.value = [];
};

// 速度改变处理
const onSpeedChange = () => {
  // 如果正在播放，需要重新开始以应用新速度
  if (isPlaying.value) {
    const wasPlaying = isPlaying.value;
    resetAnimation();
    if (wasPlaying) {
      setTimeout(() => {
        isPlaying.value = true;
        playAnimation();
      }, 100);
    }
  }
};

// 工作流程改变
const onWorkflowChange = () => {
  resetAnimation();
  const workflow = workflows[selectedWorkflow.value as keyof typeof workflows];
  if (workflow) {
    currentSteps.value = workflow.steps;
  }
};

onMounted(() => {
  onWorkflowChange();
});
</script>

<style scoped lang="scss">
.mysql-mvcc-view {
  padding: 20px;
  
  .story-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 800px;
  }
  
  /* 故事头部 */
  .story-header {
    background: rgba(255, 255, 255, 0.95);
    padding: 24px 32px;
    border-bottom: 3px solid #e0e0e0;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &.active {
      background: rgba(255, 255, 255, 0.98);
      border-bottom-color: #667eea;
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
    }
    
    .story-title {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
      
      .story-icon {
        font-size: 48px;
        line-height: 1;
      }
      
      .story-text {
        flex: 1;
        
        .story-main-title {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        
        .story-subtitle {
          font-size: 16px;
          color: #666;
          line-height: 1.5;
        }
      }
    }
    
    .story-progress {
      .progress-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        
        .progress-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        
        .progress-value {
          font-size: 14px;
          color: #667eea;
          font-weight: 600;
        }
      }
      
      .progress-bar-wrapper {
        height: 8px;
        background: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
        
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.5s ease;
          border-radius: 4px;
        }
      }
    }
  }
  
  /* 主故事场景 */
  .story-scene {
    display: grid;
    grid-template-columns: 300px 1fr 280px;
    gap: 24px;
    padding: 32px;
    min-height: 700px;
  }
  
  /* 左侧：角色面板 */
  .characters-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .character-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    border: 3px solid transparent;
    opacity: 0.6;
    backdrop-filter: blur(10px);
    
    &.active {
      opacity: 1;
      border-color: #667eea;
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
      animation: character-glow 2s ease-in-out infinite;
      transform: scale(1.02);
    }
    
    .character-avatar {
      text-align: center;
      margin-bottom: 16px;
      
      .avatar-emoji {
        font-size: 64px;
        line-height: 1;
        display: inline-block;
        animation: bounce 2s ease-in-out infinite;
      }
    }
    
    .character-info {
      text-align: center;
      
      .character-name {
        font-size: 18px;
        font-weight: 700;
        color: #333;
        margin-bottom: 8px;
      }
      
      .character-id {
        font-size: 24px;
        font-weight: bold;
        color: #667eea;
        margin-bottom: 12px;
      }
      
      .character-desc {
        font-size: 14px;
        color: #666;
        margin-bottom: 12px;
      }
      
      .snapshot-info {
        text-align: left;
        margin-top: 16px;
        
        .snapshot-item {
          margin-bottom: 12px;
          
          .snapshot-label {
            font-size: 12px;
            color: #666;
            display: block;
            margin-bottom: 8px;
          }
          
          .snapshot-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            
            .snapshot-badge {
              padding: 6px 14px;
              background: linear-gradient(135deg, #e3f2fd, #bbdefb);
              border: 2px solid #2196f3;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 600;
              color: #1976d2;
              transition: all 0.3s ease;
              
              &.comparing {
                background: linear-gradient(135deg, #ffebee, #ffcdd2);
                border-color: #f44336;
                color: #f44336;
                animation: badge-pulse 1.5s ease-in-out infinite;
                transform: scale(1.1);
              }
            }
            
            .empty-badge {
              font-size: 12px;
              color: #999;
              font-style: italic;
            }
          }
        }
      }
    }
  }
  
  /* 中间：数据故事面板 */
  .data-story-panel {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    
    .story-section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      font-weight: 700;
      color: #333;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid #e0e0e0;
      
      .title-emoji {
        font-size: 28px;
      }
    }
    
    .version-story {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-height: 400px;
      flex: 1;
      
      .version-story-card {
        background: linear-gradient(135deg, #f5f7fa, #ffffff);
        border: 3px solid #e0e0e0;
        border-radius: 16px;
        padding: 24px;
        transition: all 0.5s ease;
        opacity: 0.4;
        transform: scale(0.95);
        position: relative;
        
        &.active {
          opacity: 1;
          transform: scale(1);
          border-color: #667eea;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          animation: card-glow 2s ease-in-out infinite;
        }
        
        &.comparing {
          border-color: #f44336;
          box-shadow: 0 8px 24px rgba(244, 67, 54, 0.3);
          animation: card-checking 1.5s ease-in-out infinite;
        }
        
        &.visible {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
          border-color: #4caf50;
        }
        
        &.found {
          animation: card-success 2s ease-in-out infinite;
        }
        
        .story-content {
          .story-header-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #e0e0e0;
            
            .story-number {
              font-size: 18px;
              font-weight: 700;
              color: #667eea;
            }
            
            .story-author {
              font-size: 14px;
              color: #666;
              background: #f5f5f5;
              padding: 6px 12px;
              border-radius: 12px;
            }
          }
          
          .story-body {
            .story-data {
              background: white;
              border-radius: 12px;
              padding: 16px;
              margin-bottom: 16px;
              
              .data-item {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 12px;
                font-size: 16px;
                
                &.highlight {
                  .data-text {
                    color: #667eea;
                    font-weight: 600;
                    font-size: 18px;
                  }
                }
                
                .data-icon {
                  font-size: 20px;
                }
                
                .data-text {
                  color: #333;
                }
              }
            }
            
            .story-link {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              color: #667eea;
              font-size: 14px;
              margin-top: 12px;
              
              .link-text {
                font-weight: 500;
              }
            }
          }
          
          .story-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            
            &.success {
              background: linear-gradient(135deg, #4caf50, #66bb6a);
              color: white;
            }
            
            &.checking {
              background: linear-gradient(135deg, #f44336, #ef5350);
              color: white;
              
              .badge-emoji {
                animation: rotate 2s linear infinite;
              }
            }
            
            .badge-emoji {
              font-size: 18px;
            }
          }
        }
      }
      
      .empty-story {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        color: #999;
        
        .empty-emoji {
          font-size: 64px;
          margin-bottom: 16px;
        }
        
        .empty-text {
          font-size: 16px;
        }
      }
    }

    /* 知识点科普 - 内联在核心动画区域 */
    .knowledge-card-inline {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 3px solid #e0e0e0;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
      border-radius: 12px;
      padding: 20px;
      transition: all 0.3s ease;
      
      &.active {
        border-top-color: #667eea;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
      }
      
      .card-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 700;
        color: #333;
        margin-bottom: 16px;
        
        .title-emoji {
          font-size: 24px;
        }
      }
      
      .knowledge-content {
        .knowledge-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .knowledge-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(-10px);
          
          &.show {
            opacity: 1;
            transform: translateY(0);
            background: rgba(255, 255, 255, 0.95);
            border-left: 4px solid #667eea;
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
          }
          
          .knowledge-icon {
            font-size: 20px;
            flex-shrink: 0;
            margin-top: 2px;
          }
          
          .knowledge-text {
            font-size: 14px;
            line-height: 1.7;
            color: #333;
          }
        }
        
        .empty-knowledge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          color: #999;
          
          .empty-emoji {
            font-size: 48px;
            margin-bottom: 12px;
          }
          
          .empty-text {
            font-size: 14px;
          }
        }
      }
    }
  }
  
  /* 右侧：知识面板 */
  .knowledge-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .steps-story-card,
  .knowledge-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    
    &.active {
      border: 3px solid #667eea;
    }
    
    .card-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      font-weight: 700;
      color: #333;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid #e0e0e0;
      
      .title-emoji {
        font-size: 24px;
      }
    }
    
    .steps-story-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      
      .story-step-item {
        display: flex;
        gap: 12px;
        padding: 12px;
        border-radius: 12px;
        background: #f5f5f5;
        transition: all 0.3s ease;
        opacity: 0.5;
        
        &.active {
          opacity: 1;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(102, 126, 234, 0.05));
          border-left: 4px solid #667eea;
          transform: translateX(4px);
        }
        
        &.completed {
          opacity: 0.8;
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
          border-left: 4px solid #4caf50;
        }
        
        .step-marker {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: bold;
          color: #666;
        }
        
        &.active .step-marker {
          background: #667eea;
          color: white;
          animation: marker-pulse 1.5s ease-in-out infinite;
        }
        
        &.completed .step-marker {
          background: #4caf50;
          color: white;
        }
        
        .step-story {
          flex: 1;
          
          .step-name {
            font-size: 14px;
            font-weight: 500;
            color: #333;
            line-height: 1.4;
          }
        }
      }
    }
    
    .knowledge-content {
      .knowledge-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .knowledge-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 16px;
        border-radius: 12px;
        background: #f5f5f5;
        transition: all 0.4s ease;
        opacity: 0;
        transform: translateX(-20px);
        
        &.show {
          opacity: 1;
          transform: translateX(0);
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(102, 126, 234, 0.05));
          border-left: 4px solid #667eea;
        }
        
        .knowledge-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .knowledge-text {
          font-size: 14px;
          line-height: 1.7;
          color: #333;
        }
      }
      
      .empty-knowledge {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        color: #999;
        
        .empty-emoji {
          font-size: 64px;
          margin-bottom: 16px;
        }
        
        .empty-text {
          font-size: 16px;
        }
      }
    }
  }
}

/* 动画效果 */
@keyframes character-glow {
  0%, 100% {
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.5);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes badge-pulse {
  0%, 100% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes card-glow {
  0%, 100% {
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.5);
  }
}

@keyframes card-checking {
  0%, 100% {
    box-shadow: 0 8px 24px rgba(244, 67, 54, 0.3);
  }
  50% {
    box-shadow: 0 8px 32px rgba(244, 67, 54, 0.5);
  }
}

@keyframes card-success {
  0%, 100% {
    box-shadow: 0 8px 24px rgba(76, 175, 80, 0.3);
  }
  50% {
    box-shadow: 0 8px 32px rgba(76, 175, 80, 0.5);
  }
}

@keyframes marker-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(102, 126, 234, 0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.gap-3 {
  gap: 12px;
}

/* 速度控制 */
.speed-control {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
  }
  
  .speed-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
  }
  
  :deep(.v-btn-toggle) {
    .v-btn {
      min-width: 50px;
      font-weight: 600;
      
      &.v-btn--active {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
      }
    }
  }
}
</style>