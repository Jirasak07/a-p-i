var express = require("express");
var app = express();
var port = 8080 || process.env.PORT

app.get('/',function(req,res,next){
    res.send("API is Run!!");
})
app.listen(2222, function () {
    console.log("CORS PORT 85");
  });
