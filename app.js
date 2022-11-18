var express = require("express");
var app = express();
var port = 8080 || process.env.PORT

app.get('/',function(req,res,next){
    res.send("API is Run!! Run Run Run");
})
app.listen(8080||process.env.PORT, function () {
    console.log("app runing port ", PORT );
  });
module.exports = app