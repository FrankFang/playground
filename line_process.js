

    var data = [0.0015]

    function getPercentage(number) {
        return (number * 100).toFixed(2) + '%'
    }

    var width = $('.line').width()

    var nodes = d3.select('.line').selectAll('.bar').data(data)
    nodes.enter().append('div').attr('class', 'bar')
        .style('width', '0%')
        .transition()
        .style('width', function (d) {
            return getPercentage(d)
        })
        .duration(1500)
    nodes.append('span')
        .attr('class', 'text')
        .text(function (d) {
            return getPercentage(d)
        })
        .style('width', '50px')
        .style('left', '0px')
        .style('opacity', 0)

        .transition()
        .style('left', function (d) {
            if (d / 2 * width < 25) {
                return width * d  + 'px'
            } else {
                return width * (d / 2) - 25 + 'px'
            }
        })
        .style('opacity', 1)
        .style('color', function (d) {
            if (d / 2 * width < 25) {
                return 'black'
            } else {
                return 'white'
            }

        })
        .duration(1500)
    //nodes.exit()

    //console.log(bbb);


