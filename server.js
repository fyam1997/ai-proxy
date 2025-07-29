import express from "express"

import { createProxyMiddleware } from "http-proxy-middleware"

const app = express()

const PORT = 9021
const HOST = "localhost"
const API_SERVICE_URL = "https://api.deepseek.com"

app.use(
    "/ai",
    createProxyMiddleware({
        target: API_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
            [`^/ai`]: "",
        },
    }),
)

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`)
})
