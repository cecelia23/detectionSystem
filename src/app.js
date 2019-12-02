/* eslint-disable no-console */
var express = require('express');
var bodyParser = require('body-parser');

var apiServer = express();
apiServer.use(bodyParser.json());
apiServer.use(bodyParser.urlencoded({
    extended: true
}));

const apiRouter = express.Router();

var fs = require('fs');
apiRouter.route('/:apiName')
    .all((req, res) => {
        fs.readFile('./db.json','utf8', (err,data1) => {
            if (err) throw err
            var data = JSON.parse(data1)
            if (data[req.params.apiName]) {
                res.json(data[req.params.apiName])
            } else {
                res.send('no such api name')
            }
        })
    })

apiServer.use(apiRouter);
apiServer.listen(3000, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('listening at http://localhost:'+3000+ '\n')
})


