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
        return {x: generateInt(800), y: generateInt(400)}
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

    var dataset = generatePoints(250)

    var dataset2 = generatePoints(1000)


    var count = 1
    var svg = d3.select('body').append('svg')
        .attr('width', 800)
        .attr('height', 400)
        .on('click', function () {
            var start = new Date()
            //for (var i = 0; i < count; i++) {
            //    for (var j = 0; j < 500; j++) {
            //        dataset.push(generatePoint())
            //    }
            //}
            var dataset = generatePoints(250)
            append(dataset, count)
            var end = new Date()
            count += 1
        })

    update(dataset)
    count += 1
    function update(dataset) {

        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('r', 3)
            .attr('cx', function (d, i) {
                return d.x
            })
            .attr('cy', function (d, i) {
                return d.y
            })
    }

    function append(dataset, count) {
        svg.selectAll('circle.class' + count)
            .data(dataset)
            .enter()
            .append('circle')
            .attr('class', 'class' + count)
            .attr('r', function (d) {return 3})
            .attr('cx', function (d, i) {
                return d.x
            })
            .attr('cy', function (d, i) {
                return d.y
            })

    }
})
