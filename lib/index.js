'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = undefined;

var _uuid = require('uuid');

var _lodash = require('lodash');

var _hide = require('./hide');

var _hide2 = _interopRequireDefault(_hide);

var _restore = require('./restore');

var _restore2 = _interopRequireDefault(_restore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hideMap = {};

var updateOverflow = function updateOverflow() {
  // Should restore overflow if every hide variable is set to false.
  var shouldRestore = (0, _lodash.every)(hideMap, function (hide) {
    return hide === false;
  });
  if (shouldRestore) {
    (0, _restore2.default)();
  } else {
    (0, _hide2.default)();
  }
};

var generate = exports.generate = function generate() {
  var id = (0, _uuid.v4)();
  return function (hide) {
    hideMap[id] = hide;

    updateOverflow();
  };
};

exports.default = generate();