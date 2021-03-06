'use strict';

var ndbits = require('ndarray-bit');

module.exports = function(data, opts) {
    var options  = opts || {},
        samples  = data.length,
        width    = options.width  || data.length,
        height   = options.height || Math.floor(width / 2),
        padding  = isNaN(options.padding) ? 1 : options.padding,
        barWidth = Math.max(Math.floor(width / samples) - padding, 1);

    if ((barWidth * samples) + (padding * samples) > width) {
        barWidth = Math.max(Math.floor(width / samples), 1);
        padding  = 0;
    }

    var max   = options.max === undefined ? Math.max.apply(null, data) : options.max,
        min   = options.min === undefined ? Math.min.apply(null, data) : options.min,
        scale = height / (max - min);

    var chart = ndbits([width, height]);
    
    var y, x, i, barStartX, barStartY;
    for (i = 0; i < samples; i++) {
        barStartX = (i * barWidth) + (i * padding);
        barStartY = height - Math.max(0, Math.floor((data[i] - min) * scale));
        
        for (y = barStartY; y < height; y++) {
            for (x = barStartX; x < barStartX + barWidth; x++) {
                chart.set(x, y, true);
            }
        }
    }

    return chart;
};