# Install
```sh
npm install log4js-helper -S
```

# Example
```javascript
// ES6
import Logger from 'log4js-helper'
// ES5
var Logger = require('log4js-helper')
Logger.setLevel(Logger.INFO)
Logger.info('info', 123) // info 123
Logger.debug('debug', 123) // will not print in cosole
```
# Api
## setLevel
Level: DEBUG < INFO < WARN < ERROR < OFF
The Logger.info and Logger.debug will not print in cosole when you set level WARN and so on.
### info, debug, warn, error
This method just like window.console.

