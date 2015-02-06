/*global d3*/
define(['require'], function (require) {

    function generatePoints(count) {
        var result = []
        for (var i = 0; i < count; i++) {
            result.push(generatePoint())
        }
        return result
    }

    function generatePoint() {
        return {x: generateInt(800), y: generateInt(600)}
    }

    function generateInt(min, max) {
        if (min === undefined) {
            max = 100
            min = 0
        }
        if (max === undefined) {
            max = min
            min = 0
        }
        return Math.round(Math.random() * (max - min)) + min
    }

    var dataset = generatePoints(5000)

    var dataset2 = [5, 10, 15, 20, 25, 40, 45, 50, 55, 60]


    var svg = d3.select('body').append('svg')
        .attr('width', 800)
        .attr('height', 600)
        .on('click', function () {
            update(dataset2)
        })

    update(dataset)
    function update(dataset) {

        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('r', function (d) {return 10})
            .attr('cx', function (d, i) {
                return d.x
            })
            .attr('cy', function (d, i) {
                return d.y
            })
            .style('fill', 'rgba(255,0,0,0.2)')
    }
})
