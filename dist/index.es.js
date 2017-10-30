/*
 * log4js-helper v0.0.4
 * (c) xsdlr
 * Released under the MIT License.
 */

import _Object$assign from 'babel-runtime/core-js/object/assign';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

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

export default logger;
//# sourceMappingURL=index.es.js.map
