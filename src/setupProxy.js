const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware("/getCompany",{
            target: "http://localhost:3000/api",
            changeOrigin: true
        })
    )
}