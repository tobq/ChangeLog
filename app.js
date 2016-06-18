var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs=require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    res.send(req.body);
    console.log(req.body)
});
function add(p, callback) {
    fs.readFile('.' + p, 'utf8', callback);
}

app.get(/./, function (req, res) {
    path=(req.url === "/")?"/index.html":req.url ;
    add(path, function (err, data) {
        if (err) res.send("ERROR: 404 - Page Not Found")
        res.send(data);
    });
})
app.listen(80);