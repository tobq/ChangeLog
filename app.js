var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    res.send(req.body);
});

app.get(/./, function (req, res) {
    path = (req.url === "/") ? "/index.html" : "."+req.url;
    res.sendFile(path,{"root": __dirname});
})
app.listen(80);