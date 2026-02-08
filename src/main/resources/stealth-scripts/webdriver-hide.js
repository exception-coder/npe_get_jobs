/**
 * WebDriver 隐藏 - 隐藏 navigator.webdriver 属性
 * 
 * 功能：
 * 1. 隐藏 navigator.webdriver 属性（最重要的反检测）
 * 2. 删除 Playwright 特有的属性
 */
(() => {
  console.log('[WEBDRIVER_HIDE] 启动...');
  
  // 隐藏 webdriver 属性（最重要！）
  Object.defineProperty(navigator, 'webdriver', {
    get: () => undefined,
    configurable: true
  });
  
  // 删除 Playwright 特有的属性
  delete navigator.__proto__.webdriver;
  
  // 隐藏 Playwright 特有的函数和属性
  const playwrightProps = [
    '__playwright',
    '__pw_manual',
    '__PW_inspect',
    'playwright',
    '__webdriverFunc',
    '__driver_evaluate',
    '__webdriver_evaluate',
    '__selenium_evaluate',
    '__fxdriver_evaluate',
    '__driver_unwrapped',
    '__webdriver_unwrapped',
    '__selenium_unwrapped',
    '__fxdriver_unwrapped'
  ];
  
  playwrightProps.forEach(prop => {
    try {
      delete window[prop];
      Object.defineProperty(window, prop, {
        get: () => undefined,
        configurable: true
      });
    } catch(e) {}
  });
  
  console.log('[WEBDRIVER_HIDE] ✓ WebDriver 特征已隐藏');
})();

