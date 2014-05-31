1bit-chart-bars
===============

Simple module for generating 1bit bar charts. Outputs an [nd-array](https://github.com/mikolalysenko/ndarray) of bits.

[![Build Status](https://travis-ci.org/dogestats/1bit-chart-bars.svg?branch=master)](https://travis-ci.org/dogestats/1bit-chart-bars)

[![Browser Test Status](https://saucelabs.com/browser-matrix/1bit-chart-bars.svg)](https://saucelabs.com/u/1bit-chart-bars)

# example

``` js
var chart = require('1bit-chart-bars');
var input = [1, 2, 3, 4, 5];
chart(input, {
    height: 7,
    width: 5,
    padding: 0,
    min: 0,
    max: 7
});

/*
[
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false,  true],
    [false, false, false,  true,  true],
    [false, false,  true,  true,  true],
    [false,  true,  true,  true,  true],
    [ true,  true,  true,  true,  true]
]
*/
```

```
░░░░░░░░░▄░░░░░░░░░░░░░░▄ 
░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌ 
░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐     such chart
░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐ 
░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐ 
░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌     amaze
░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌ 
░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐ 
░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌ 
░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌ 
▌▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐     many bar
▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌ 
▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐ 
░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌ 
░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐  wow
░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌ 
░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀ 
░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀ 
░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀
```
