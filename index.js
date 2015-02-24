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

function still(fn) {
  call("raspistill", {}, function(err) {
    if (fn) {
      fn(err);
    }
  });
}

function call(cmd, opts, fn) {
  opts = opts || {};
  exec(cmd, function(err) {
    if (fn) {
      fn(err);
    }
  });
}
