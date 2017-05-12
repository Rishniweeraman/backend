/**
 * Created by User on 5/12/2017.
 */
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

module.exports=mongoose.model('Drug',{
    name:String,

});