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

app.get("/", function (request, response) {
    add("/index.html", function (err, data) {
        response.write(data);
    });
})
app.listen(80);