const db = require('./db.json');
const deviceInfo = db.deviceInfo;
const addDevice = db.addDevice;
const packageInfo = db.packageInfo;
const sequence = db.sequence;
const frequence = db.frequence;

module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                '^/api': ''
                }
            }
        },
        before (app) {
            app.post('/deviceInfo', (req, res) => {
                res.json(deviceInfo);
            }),
            app.post('/addDevice', (req, res) => {
                res.json(addDevice);
            }),
            app.post('/updatePackage', (req, res) => {
                res.json(packageInfo)
            }),
            app.post('/updateSequence', (req, res) => {
                res.json(sequence)
            }),
            app.post('/updateFrequence', (req, res) => {
                res.json(frequence)
            })
        }
    }
}
