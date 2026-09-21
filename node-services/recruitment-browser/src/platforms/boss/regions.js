const normalize = (name) => name.trim().replace(/[省市区县]$/, '');

// Codes come from BOSS's own province/city/district tree, not administrative city codes.
export const resolveBossRegion = (provinces, name) => {
  const target = normalize(name);
  const matches = [];
  for (const province of provinces) {
    for (const city of province.subLevelModelList || []) {
      if (normalize(city.name) === target) matches.push({ cityCode: String(city.code) });
      for (const district of city.subLevelModelList || []) {
        if (normalize(district.name) === target) {
          matches.push({ cityCode: String(city.code), areaBusiness: String(district.code) });
        }
      }
    }
  }
  const unique = [...new Map(matches.map(value => [JSON.stringify(value), value])).values()];
  if (unique.length !== 1) throw new Error(`无法唯一识别 BOSS 搜索区域“${name}”，请填写明确的城市或区县名称`);
  return unique[0];
};

export const resolveBossSearch = async (page, state, search) => {
  if (!search.regionName?.trim()) return search;
  if (!state.bossRegionTree) {
    const response = await page.request.get('https://www.zhipin.com/wapi/zpCommon/data/city.json', { timeout: 15_000 });
    const payload = await response.json();
    if (!response.ok() || payload.code !== 0 || !Array.isArray(payload.zpData?.cityList)) {
      throw new Error('无法加载 BOSS 地区字典，请稍后重试');
    }
    state.bossRegionTree = payload.zpData.cityList;
  }
  return { ...search, ...resolveBossRegion(state.bossRegionTree, search.regionName) };
};
