var exec = require("child_process").exec;
var events = require("events");

module.exports = Cam;

function Cam() {
  // ..
}

Cam.prototype = {
  exists: exists,
  still: still
};

Cam.prototype.__proto__ = events.EventEmitter.prototype;

function exists(fn) {
  exec("which git", function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function still(args, fn) {
  var self = this;
  var cmd = buildParams("raspistill", args);
  exec(cmd, function(err) {
    if (fn) {
      fn(err);
    }
    if (!err) {
      self.emit("still");
    }
  });
}

function buildParams(cmd, args) {
  var str = cmd;
  for (var i in args) {
    str += " " + i;
    if (args[i]) {
      str += " " + args[i];
    }
  }
  return str;
}
