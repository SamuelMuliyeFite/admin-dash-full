const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware("/getCompany",{
            target: "http://localhost:4001/api",
            changeOrigin: true
        })
    )
}