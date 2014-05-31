'use strict';

var test = require('tape'),
    bars = require('../');

function compare(t, expected, chart) {
    for (var y = 0; y < expected.length; y++) {
        for (var x = 0; x < expected[y].length; x++) {
            t.equal(
                chart.get(x, y),
                expected[y][x] ? true : false,
                '[x: ' + x + ', y: ' + y + '] should be ' + (expected[y][x] ? 1 : 0)
            );
        }
    }
}

test('plots simplest chart ever correctly', function(t) {
    var input   = [0, 1],
        options = {
            height: 1,
            width: 2,
            padding: 0
        };

    var expected = [
        [0, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('plots simple 2x2 chart correctly', function(t) {
    var input   = [1, 2],
        options = {
            height: 2,
            width: 2,
            padding: 0,
            min: 0
        };

    var expected = [
        [0, 1],
        [1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('plots simple 4x4 chart correctly', function(t) {
    var input   = [1, 2, 3, 4],
        options = {
            height: 4,
            width: 4,
            padding: 0,
            min: 0,
            max: 4
        };

    var expected = [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('plots simple 6x3 chart correctly', function(t) {
    var input   = [2, 2, 4, 4, 6, 6],
        options = {
            height: 3,
            width: 6,
            padding: 0,
            min: 0,
            max: 6
        };

    var expected = [
        [0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('plots correctly', function(t) {
    var input   = [1, 2, 3, 4, 5],
        options = {
            height: 7,
            width: 5,
            padding: 0,
            min: 0,
            max: 7
        };

    var expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 1, 1, 1],
        [0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('width of bars auto-adjusts', function(t) {
    var input   = [1, 2, 3],
        options = {
            height: 3,
            width: 9,
            padding: 0,
            min: 0,
            max: 3
        };

    var expected = [
        [0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('width of bars auto-adjusts', function(t) {
    var input   = [1, 2, 3],
        options = {
            height: 3,
            width: 9,
            padding: 1,
            min: 0,
            max: 3
        };

    var expected = [
        [0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 1, 1, 0, 1, 1, 0]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test('removes padding on too many samples', function(t) {
    var input   = [1, 1, 1, 1, 1],
        options = {
            height: 2,
            width: 5,
            padding: 2,
            min: 0,
            max: 1
        };

    var expected = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});

test.skip('data is stretched to fit height', function(t) {
    var input   = [1, 2, 3],
        options = {
            height: 6,
            width: 3,
            padding: 0
        };

    var expected = [
        [0, 0, 1],
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];

    var chart = bars(input, options);
    compare(t, expected, chart);
    t.end();
});
