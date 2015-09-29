
var pc = {};

pc.removeContent = function(el){
  // Could be done faster by using d3 .exit() selector in the draw points method.
  d3.select(el).selectAll(".arc").remove();
  d3.select(el).selectAll(".legend").remove();
}

pc.update = function(el, chem) {
  // var scales = this._scales(el, state.domain);
  if(chem){
    this._drawPoints(el, chem);
  }
  // this._drawTooltips(el, scales, state.tooltips, prevScales);
};

pc.createChart = function(dom, props){
  var width = props.width;
  var height = props.height;
    width = width + 200;

  var svg = d3.select(dom).append('svg')
      .attr('class', 'd3')
      .attr('width', width)
      .attr('height', height)

  var chart = svg.append("g")
      .attr("transform", "translate(" + (props.width/2) + "," + (height/2) + ")");

  return svg;
},

pc._drawPoints = function(dom, props){
  var data = [];
  if(props.chem && props.chem.results != 'not_found'){
    data = props.chem.results.map(function(res){
      return {name: res.property, count: parseInt(res.value)}
    });
  }

  console.log(data);

  var sum = data.reduce(function(memo, num){ return memo + num.count; }, 0);
  console.log(sum);
  var chart = d3.select(dom).select("g");
  var outerRadius = props.width/2.2;
  var innerRadius = props.width/8;
  var arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

  var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];

  var pie = d3.layout.pie()
      .value(function (d) { return d.count; });

  var g = chart.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc")
        .on('mouseover', function (d, i) {
          d3.select(this)
            .transition()
            .duration(500)
            .ease('bounce')
            .attr('transform', function (d) {
              var dist = 10;
              d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
              var x = Math.sin(d.midAngle) * dist;
              var y = -Math.cos(d.midAngle) * dist;
              return 'translate(' + x + ',' + y + ')';
            });
          d3.select(this).append("text").style("fill", function(d) { return colors[i]; }).attr("id", "percent")
          .attr('transform', "translate(0,-5)")
          .attr("text-anchor", "middle").attr("dy", ".35em").style("font", "bold 15px Arial")
          .text(function(d) { return (((d.value/sum)*100).toFixed(1) + " %"); });
          g.filter(function(e) { return e.value != d.value; }).style('opacity',0.5);
          // Actions.setInfo(d.property);
        })
      .on('mouseout', function (d, i) {
        d3.select(this)
        .transition()
        .duration(500)
        .ease('bounce')
        .attr('transform', 'translate(0,0)');
        d3.select("#percent").remove();
        g.filter(function(e) { return e.value != d.value; }).style('opacity',1)
      });

  g.append("path")
    .style("fill", function(d, i) { return colors[i]; })
    .transition().delay(function(d, i) { return i * 400; }).duration(500)
    .attrTween('d', function(d) {
         var i = d3.interpolate(d.startAngle, d.endAngle);
         return function(t) {
             d.endAngle = i(t);
           return arc(d);
         }
    });

  var center = g.filter(function(d) { return d.endAngle - d.startAngle > .1; }).append("text").style("fill", "white")
    .attr('transform', function(d){
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle").attr("dy", ".35em")
    .text(function(d) { return d.value; });

  var legend = chart.selectAll(".legend")
    .data(data)
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function (d, i) {
    return "translate(150," + (-i * 20) + ")";
  });

  var rect = legend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d, i) { return colors[i]; }).style('opacity', 0);

  var name = legend.append("text")
      .attr("x", 24)
      .attr("y", 12)
      .text(function (d) {
        var text = d.name;
        if(text.length >30){
          text = text.substring(0,26);
          text = text + '...';
        }
      return text;
      }).style('opacity', 0);
  rect.transition().delay(function(d, i) { return i * 400; }).duration(1000).style('opacity',1);
  name.transition().delay(function(d, i) { return i * 400; }).duration(1000).style('opacity',1);
};
