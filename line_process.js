for (var i = 0; i <= 10; i++) {
    lineProcess({
        percentage: 10 * i,
        label: '第' + i + '天',
        container: '.line' + i
    })
}

function lineProcess(_options) {
    var defaultOptions = {
        container: 'body',
        percentage: 0,
        label: '',
        width: 400,
        height: 40,
        padding: {
            top: 25,
            bottom: 5,
            left: 0,
            right: 0
        },
        duration: 1000
    }
    var options = $.extend({}, defaultOptions, _options)

    var isIE = document.all

    function getPercentage(number) {
        return (number * 100).toFixed(2) + '%'
    }

    var width = options.width
    var height = options.height
    var padding = options.padding
    var data = [{
        value: options.percentage / 100,
        label: options.label
    }]

    var svg = d3.select(options.container)
        .append('svg').attr({
            width: width + padding.left + padding.right,
            height: height + padding.top + padding.left
        })
        .style({
            overflow: 'visible'
        })

    var container = svg.append('g')
    //drawPopOver()

    function drawPopOver() {
        var popOver = svg.append('g')
        var popOverBg = popOver.append('rect')
        var popOverText = popOver.append('text')

        popOverText.text('第16天').attr({
            y: 16,
            fill: 'white',
            'font-size': 12,
            'font-family': '微软雅黑'
        })

        var popOverTextRect = popOverText[0][0].getBBox()
        var y = 16 - popOverTextRect.height - 4

        popOverBg.attr({
            width: popOverTextRect.width + 8,
            height: popOverTextRect.height + 8,
            fill: '#bcbcbc',
            y: y
        })

        popOver.append('polygon')
            .attr({
                points: '0,0 10,0 5,5',
                fill: 'red'
            })
    }

    var background = container.append('rect')
        .attr({
            width: width,
            height: height,
            x: padding.left,
            y: padding.top,
            fill: '#f2f2f2'
        })

    var bar = container.selectAll('.bar').data(data)
    bar.enter().append('rect').attr({
        'class': 'bar',
        width: 0,
        height: height,
        x: padding.left,
        y: padding.top,
        fill: '#ffcc00'
    })
        .transition()
        .attr({width: function (d) {return width * d.value}})
        .duration(options.duration)

    bar.exit()

    var textPercentage = container.selectAll('.data').data(data)

    textPercentage.enter().append('text')
        .attr({
            'class': 'data',
            x: padding.left,
            y: function (d) {
                if (isIE) {
                    return padding.top + height / 2
                } else {
                    return padding.top + 16 + (height - 16) / 2 - 1
                }
            },
            color: 'black',
            'font-size': 16,
            'font-family': '微软雅黑'
        })
        .text(function (d) {
            return getPercentage(d.value)
        })
        .transition()
        .attr({
            x: function (d) {
                var w = width * d.value
                if (w < 62) {
                    return padding.left + 4
                } else if (w >= 62) {
                    return padding.left + width * d.value - 62 - 4
                }
            }
        })
        .duration(options.duration)
    textPercentage.exit()

    var t = container.selectAll('.xxxx').data(data)

    t.enter().append('text')
        .attr({
            'class': 'xxxx',
            y: 16,
            x: function (d) {
                return d.value * width
            },
            'font-size': 12,
            'font-family': '微软雅黑'
        })
        .text(function (d) {
            return d.label
        })

    t.exit()

    container.selectAll('.xxxx').each(function (a, b, c) {
        var selection = d3.select(this)
        selection.attr({
            x: selection.attr('x') - this.getBBox().width / 2
        })
    })


}
