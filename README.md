# zhiwen browser control

Docker 部署的可视化浏览器控制服务。它会启动一个可通过 noVNC 访问的 Chromium 桌面环境，并提供 REST API 自动创建随机指纹浏览器、配置 SOCKS5 代理、加载扩展、打开页面和执行搜索。

## 1. 放入扩展程序

把你已经构建好的扩展复制到本项目的 `extension` 目录。你的 openai-plus-vxt 构建产物路径是：

```powershell
Copy-Item -Recurse -Force F:\chengxu\openai-plus-vxt\.output\chrome-mv3\* F:\chengxu\zhiwen\extension\
```

## 2. 本地 Docker 启动

先创建 `.env` 并修改 `API_TOKEN`，不要用默认值。

```powershell
cd F:\chengxu\zhiwen
Copy-Item .env.example .env
docker compose up -d --build
```

打开浏览器访问：

```text
http://127.0.0.1:17004
```

这里会看到服务器里弹出的浏览器界面。

默认 `AUTOSTART_SESSION=true`，容器启动后会自动创建一个 `default` 指纹浏览器窗口。如果要启动时就带 SOCKS5，修改 `.env`：

```text
AUTOSTART_PROXY=socks5://user:pass@ip:port
AUTOSTART_URL=https://www.google.com
```

## 3. 创建一个指纹浏览器窗口

```powershell
$token = "change-me"
$body = @{
  proxy = "socks5://user:pass@127.0.0.1:1080"
  startUrl = "https://www.google.com"
} | ConvertTo-Json

Invoke-RestMethod `
  -Method Post `
  -Uri "http://127.0.0.1:17003/sessions" `
  -Headers @{ Authorization = "Bearer $token" } `
  -ContentType "application/json" `
  -Body $body
```

返回里会有 `session.id`。同时 noVNC 里会弹出一个加载了扩展的新 Chromium 窗口。

## 4. 执行搜索

```powershell
$sessionId = "替换成返回的session.id"
$body = @{
  keyword = "openai"
  engine = "google"
} | ConvertTo-Json

Invoke-RestMethod `
  -Method Post `
  -Uri "http://127.0.0.1:17003/sessions/$sessionId/search" `
  -Headers @{ Authorization = "Bearer $token" } `
  -ContentType "application/json" `
  -Body $body
```

支持的搜索引擎：

- `google`
- `bing`
- `duckduckgo`

## 5. 打开指定网址

```powershell
$body = @{ url = "https://example.com" } | ConvertTo-Json

Invoke-RestMethod `
  -Method Post `
  -Uri "http://127.0.0.1:17003/sessions/$sessionId/goto" `
  -Headers @{ Authorization = "Bearer $token" } `
  -ContentType "application/json" `
  -Body $body
```

## 6. 关闭会话

```powershell
Invoke-RestMethod `
  -Method Delete `
  -Uri "http://127.0.0.1:17003/sessions/$sessionId" `
  -Headers @{ Authorization = "Bearer $token" }
```

## 7. 服务器部署

上传整个 `F:\chengxu\zhiwen` 目录到服务器后：

```bash
docker compose up -d --build
```

服务器安全建议：

- 只对你自己的 IP 开放 `17003` 和 `17004`。
- `API_TOKEN` 必须改成强随机字符串。
- 如果暴露到公网，建议前面加 Nginx HTTPS 和 Basic Auth。

## API

`POST /sessions`

```json
{
  "proxy": "socks5://user:pass@ip:port",
  "startUrl": "https://www.google.com",
  "fingerprint": {
    "locale": "en-US",
    "timezoneId": "America/New_York"
  }
}
```

`POST /sessions/:id/search`

```json
{
  "keyword": "openai",
  "engine": "google"
}
```

`POST /sessions/:id/goto`

```json
{
  "url": "https://example.com"
}
```
