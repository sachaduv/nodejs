const fs = require('fs');

var buffer = fs.readFileSync(__dirname+'/greet.txt','utf8');
var async_buf = null;
var async_buffer = fs.readFile(__dirname+'/greet.txt','utf8',function(err,data){
    async_buf = data;
})

module.exports = {
    sync : buffer,
    async : async_buffer
};