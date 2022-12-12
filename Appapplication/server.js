const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/route/api');

const port = 3200;

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(port,function(){
    console.log("server running on localhost:"+port);
});

module.exports = app;