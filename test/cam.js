var tape = require("tape");
var fs = require("fs");
var Cam = require("../index");

tape("cam", {timeout: 2000}, function(t) {
  var c = new Cam();
  var f = "temp.jpg";
  
  function next() {
    c.on("still", function() {
      t.pass();
    });
    c.still({
      "-o": f,
      "-t": 1
    }, function() {
      t.pass();
      fs.unlinkSync(f);
    });
  }

  c.exists(function(err) {
    if (err) {
      t.end();
    } else {
      t.plan(2);
      next();
    }
  });
});
