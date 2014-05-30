var user       = process.env.SAUCE_USERNAME;
var key        = process.env.SAUCE_ACCESS_KEY;
var pkg        = require('../package.json');
var path       = require('path');
var brtapsauce = require('brtapsauce');

var capabilities = capabilities = [
    { browserName: 'chrome'            , platform: 'Windows 8' , version: ''   },
    { browserName: 'firefox'           , platform: 'Windows 8' , version: ''   },
    { browserName: 'internet explorer' , platform: 'Windows 8' , version: '10' },
    { browserName: 'internet explorer' , platform: 'Windows 7' , version: '9'  },
    { browserName: 'safari'            , platform: 'Windows 7' , version: '5'  },
    { browserName: 'opera'             , platform: 'Windows 7' , version: ''   },
    { browserName: 'ipad'              , platform: 'OS X 10.8' , version: '6'  },
    { browserName: 'android'           , platform: 'Linux'     , version: '4.0', 'device-type': 'tablet' }
];

if (!user) {
    throw new Error('Must set a SAUCE_USERNAME env var');
} else if (!key) {
  throw new Error('Must set a SAUCE_ACCESS_KEY env var');
}

brtapsauce({
    name         : pkg.name,
    user         : user,
    key          : key,
    brsrc        : path.join(__dirname, 'chart.test.js'),
    capabilities : capabilities
});