var exec = require("child_process").exec;

module.exports = {
  exists: exists,
  still: still
};

function exists(fn) {
  exec("which git", function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function still(args, fn) {
  args = args || {};
  exec(build("raspistill", args), function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function build(cmd, args) {
  var str = cmd;
  for (var i in args) {
    str += " " + i;
    if (args[i]) {
      str += " " + args[i];
    }
  }
  return str;
}
