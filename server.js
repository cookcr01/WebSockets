const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');



container.resolve(function(users){
     
    const app = SetupExpress();

    function SetupExpress(){
        const app = express;
        const server = http.createServer(app);
        server.listen(3000, function(){
            console.log("listening on port 3000");
        });
    }
    //setup router
    const router = require('express-promise-router')();
    users.SetRouteing(router);

    app.use(router);

});