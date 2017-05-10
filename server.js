/**
 * Created by User on 5/10/2017.
 */

var express=require('express');
var app=express();

var server=app.listen(5000,function(){
    console.log('listening on port',server.address().port);
})
