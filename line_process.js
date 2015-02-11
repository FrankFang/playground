var data = [0.50]

function getPercentage(number) {
    return (number * 100).toFixed(2) + '%'
}

var svg = d3.select('body').append('svg').attr({width: 400, height: 40})

var line = svg.append('rect')
    .attr({
        'class': 'line',
        width: 400,
        height: 40,
        x: 0,
        y: 0
    })

var bar = svg.selectAll('.bar').data(data)
bar.enter().append('rect').attr({
    'class': 'bar',
    width: 0,
    height: 40,
    x: 0,
    y: 0
})
    .transition()
    .attr({width: function (d) {return 400 * d}})
    .duration(1000)
    




