# Recruitment Browser Sidecar

招聘平台浏览器控制进程。运行代码只依赖 Patchright，不使用 Playwright；服务仅监听 `127.0.0.1`。

## 本地运行

```powershell
npm install
npm test
npm start
```

默认端口为 `17321`，持久化浏览器资料位于 `.profiles/<platform>/<profile>`。可通过以下环境变量覆盖：

- `NPE_PATCHRIGHT_PORT`：监听端口。
- `NPE_BROWSER_PROFILE_ROOT`：Profile 根目录。

Spring 默认自动启动 `node src/server.js`。部署前需要先在本目录执行 `npm install`，并确保 Chrome 可用。平台 URL 必须通过平台域名白名单，Java 侧不能传入任意站点地址。
