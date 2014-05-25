var test = require('tape'),
    bars = require('../');

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

    t.plan(1);
    t.deepLooseEqual(bars(input, options), expected);
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

    t.plan(1);
    t.deepLooseEqual(bars(input, options), expected);
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

    t.plan(1);
    t.deepLooseEqual(bars(input, options), expected);
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

    t.plan(1);
    t.deepLooseEqual(bars(input, options), expected);
});

test.skip('data is stretched to fit height', function(t) {
    var input   = [1, 2, 3],
        options = {
            height: 6,
            width: 6,
            padding: 0
        };

    var expected = [
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
    ];

    t.plan(1);
    t.deepLooseEqual(bars(input, options), expected);
});