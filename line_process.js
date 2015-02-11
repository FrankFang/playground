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
        y: 0,
        fill: 'red'
    })

var bar = svg.selectAll('.bar').data(data)
bar.enter().append('rect').attr({
    'class': 'bar',
    width: 0,
    height: 40,
    x: 0,
    y: 0,
    fill: 'blue'
})
    .transition()
    .attr({width: function (d) {return 400 * d}})
    .duration(1000)
var text = svg.selectAll('text').data(data)
text.enter().append('text').attr({
    'class': 'text',
    x: 0,
    y: 16 + (40 - 16) / 2 - 1,
    color: 'black',
    width: 50,
    'font-size': 16
})
    .text(function (d) {
        return getPercentage(d)
    })
    .transition()
    .attr({
        x: function (d) {
            return 400 * d
        }
    })
    .duration(1000)


bar.exit()
    




