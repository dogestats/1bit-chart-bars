1bit-chart-bars
===============

Simple module for generating 1bit bar charts

[![Build Status](https://travis-ci.org/dogestats/1bit-chart-bars.svg?branch=master)](https://travis-ci.org/dogestats/1bit-chart-bars)

[![browser support](https://ci.testling.com/dogestats/1bit-chart-bars.png)
](https://ci.testling.com/dogestats/1bit-chart-bars)

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
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
]
*/
```