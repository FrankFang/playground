var sin = function (a) {
    return Math.sin(a / 180 * Math.PI)
}
var cos = function (a) {
    return Math.cos(a / 180 * Math.PI)
}
var getD = function (cx, cy, startArc, arc, r1, r2) {
    if (arc >= 360 || 360 - arc < 0.01) {
        arc = 359.990000
    }
    if (arc < 0) {
        arc = 0
    }


    return ["M", cx + r1 * cos(startArc).toFixed(6), cy - r1 * sin(startArc).toFixed(6),
        "L", cx + r2 * cos(startArc).toFixed(6), cy - r2 * sin(startArc).toFixed(6),
        "A", r2, r2, '0', arc > 180 ? 1 : 0, '0', cx + r2 * cos(startArc + arc).toFixed(6), cy - r2 * sin(startArc + arc).toFixed(6),
        "L", cx + r1 * cos(startArc + arc).toFixed(6), cy - r1 * sin(startArc + arc).toFixed(6),
        "A", r1, r1, '0', arc > 180 ? 1 : 0, '1', cx + r1 * cos(startArc).toFixed(6), cy - r1 * sin(startArc).toFixed(6)
    ].join(' ')
}
var data = [0.15, 0.85]
var svg = d3.select('body').append('svg').attr({width: 400, height: 400})
var path = svg.selectAll('path').data(data)
var colors = ['red', 'blue']
path.enter()
    .append('path')
    .attr({
        d: function (d, i) {
            var start = 0
            for (var j = 0; j < i; j++) {
                start += data[j]
            }
            return getD(200, 200, start * 360, 360 * d, 20, 40)
        },
        fill: function (d, i) {
            return colors[i]
        }
    })
