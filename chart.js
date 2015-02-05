define(['require'],function(require){
    var diameter = 960
    var format = d3.format(",d")
    var color = d3.scale.category20c()

    var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

})
