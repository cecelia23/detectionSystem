module.exports = {
    lintOnSave: false,
    devServer: {
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                '^/api': ''
                }
            }
        }
    }
}
