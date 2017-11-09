/*
 * log4js-helper v1.0.0
 * (c) xsdlr
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('babel-runtime/core-js/object/assign'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass')) :
	typeof define === 'function' && define.amd ? define(['babel-runtime/core-js/object/assign', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass'], factory) :
	(global['log4js-helper'] = factory(global._Object$assign,global._classCallCheck,global._createClass));
}(this, (function (_Object$assign,_classCallCheck,_createClass) { 'use strict';

_Object$assign = 'default' in _Object$assign ? _Object$assign['default'] : _Object$assign;
_classCallCheck = 'default' in _classCallCheck ? _classCallCheck['default'] : _classCallCheck;
_createClass = 'default' in _createClass ? _createClass['default'] : _createClass;

var instance = null;

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);

    if (!instance) {
      instance = this;
    }
    // level 定义
    this.DEBUG = { level: 0, type: 'debug' };
    this.INFO = { level: 1, type: 'info' };
    this.WARN = { level: 2, type: 'warn' };
    this.ERROR = { level: 3, type: 'error' };
    this.OFF = { level: 10, type: 'off' };

    this.logLevel = this.DEBUG;
    return instance;
  }

  /***
   * 设置等级
   * @param level [DEBUG,INFO,WARN,ERROR,OFF]
   */


  _createClass(Logger, [{
    key: 'setLevel',
    value: function setLevel(level) {
      if (typeof level === 'string') {
        this.logLevel = this['' + level.toUpperCase()];
      } else {
        this.logLevel = _Object$assign({}, this.DEBUG, level);
      }
    }

    /***
     * log debug
     * @param args
     */

  }, {
    key: 'debug',
    value: function debug() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this._log(this.DEBUG, args);
    }

    /***
     * log info
     * @param args
     */

  }, {
    key: 'info',
    value: function info() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this._log(this.INFO, args);
    }

    /***
     * log warn
     * @param args
     */

  }, {
    key: 'warn',
    value: function warn() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this._log(this.WARN, args);
    }

    /***
     * log error
     * @param args
     */

  }, {
    key: 'error',
    value: function error() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this._log(this.ERROR, args);
    }
  }, {
    key: '_log',
    value: function _log() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.OFF;
      var args = arguments[1];

      var type = level.type;
      if (level.level >= this.logLevel.level) {
        var f = console[type];
        if (typeof f === 'function') {
          Function.apply.apply(f, [console, args]);
        }
      }
    }
  }]);

  return Logger;
}();

var logger = new Logger();
var level = process.env.LOGGER_LEVEL;
level && logger.setLevel(level);

return logger;

})));
//# sourceMappingURL=index.umd.js.map
