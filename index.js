var exec = require("child_process").exec;

module.exports = {
  check: check,
  still: still
};

function check(fn) {
  call("which git", {}, function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function still(args, fn) {
  call("raspistill", args, function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function call(cmd, args, fn) {
  args = args || {};
  exec(build(cmd, args), function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function build(cmd, args) {
  var str = "";

  str += cmd;

  for (var i in args) {
    str += " " + i;
    if (args[i]) {
      str += " " + args[i];
    }
  }

  return str;
}
