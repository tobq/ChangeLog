var express = require('express'),
    app = express(),
    fs=require("fs"),
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    if(req.body.nm.toLowerCase() === "acyd" && req.body.pw === "ImGay") res.send(true);
    else res.send(false);
});

app.get(/./, function (req, res) {
    path = (req.url === "/") ? "/index.html" : req.url;
    fs.access("."+path, fs.F_OK, function(err) {
        if (err) {
            res.send("ERROR: 404 - (File Not Found)")
        } else {
            res.sendFile(path,{"root": __dirname});
        }
    });
})
app.listen(80);