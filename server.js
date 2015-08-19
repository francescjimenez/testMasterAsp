var express = require('express');
var app = express();

/***********************/
var rnd = Math.floor(Math.random() * 100);
setInterval(function(){
    rnd = Math.floor(Math.random() * 100);
}, 60000);
/***********************/

app.use("/", express.static(__dirname + "/"));
app.get('/', function(req, res) {
    res.sendfile('/index.html');
});

app.get('/api/random', function(req, res) {
    res.json({ "random": rnd});
});

app.listen(3000);
console.log('Server listening in port 3000');