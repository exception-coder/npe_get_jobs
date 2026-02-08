<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1>404</h1>
      <p>页面未找到</p>
      <p class="path-info">当前路径: {{ $route.path }}</p>
      <button @click="goHome" class="home-button">返回首页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.not-found-content {
  text-align: center;
}

.not-found-content h1 {
  font-size: 72px;
  margin: 0;
  color: #333;
}

.not-found-content p {
  font-size: 18px;
  color: #666;
  margin: 10px 0;
}

.path-info {
  font-family: monospace;
  background: #f5f5f5;
  padding: 8px 16px;
  border-radius: 4px;
  display: inline-block;
}

.home-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.home-button:hover {
  background: #0056b3;
}
</style>

