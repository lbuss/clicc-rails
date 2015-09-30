var ANIMATION_DURATION = 400;
var TOOLTIP_WIDTH = 30;
var TOOLTIP_HEIGHT = 30;

var ns = {};

ns.create = function(el, props) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'd3-points');

  svg.append('g')
      .attr('class', 'd3-tooltips');

  // this.update(el, props.chem);

  return svg;
};

ns.removeContent = function(el){
  d3.select('.d3-points').selectAll('*').remove();
}

ns.update = function(el, chem) {
  // var scales = this._scales(el, state.domain);
  if(chem){
    this._drawPoints(el, chem);
  }
  // this._drawTooltips(el, scales, state.tooltips, prevScales);
};

// ns._scales = function(el, domain) {
//   if (!domain) {
//     return null;
//   }
//
//   var width = el.offsetWidth;
//   var height = el.offsetHeight;
//
//   var x = d3.scale.linear()
//     .range([0, width])
//     .domain(domain.x);
//
//   var y = d3.scale.linear()
//     .range([height, 0])
//     .domain(domain.y);
//
//   var z = d3.scale.linear()
//     .range([5, 20])
//     .domain([1, 10]);
//
//   return {x: x, y: y, z: z};
// };

ns._drawPoints = function(el, chem) {
  var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
  // (el, scales, data, prevScales, dispatcher)
  var data = chem.results.map(function(result){
    return result;
  })

  var values = chem.results.map(function(result){
    return result.value;
  });

  var max = Math.max.apply(null, values);;

  var scale = 400 / max;

  var chart = d3.select(".chart")

  var x = d3.scale.linear()
    .domain([0, max*scale])
    .range([0, 420]);

  var width = 400;
      barHeight = 10;

  // var bar = chart.selectAll("g")
  //     .data(data)
  //     .enter().append("g")
  //     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
  //
  // bar.append("rect")
  //     .attr("width", x)
  //     .attr("height", barHeight - 1);

  // bar.append("text")
  //     .attr("x", function(d) { return x(d) - 3; })
  //     .attr("y", barHeight / 2)
  //     .attr("dy", ".35em")
  //     .text(function(d) { return d; });

  // bar.exit();

  ////
  var g = d3.select(el).select('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.value; });

  point.enter().append('rect')
      .attr('class', 'd3-point')
      .attr("x", 10)
      .attr("y", function(d, i){ return i * barHeight })
      .attr("width", function(d) { return d.value * scale })
      .attr("height", barHeight - 1)
      .style("fill", function(d, i) { return colors[i]; })
      .on('mouseover', function(d) {
        Actions.setInfo(d.property);
      });
  //     .attr('cx', function(d) {
  //       if (prevScales) {
  //         return prevScales.x(d.x);
  //       }
  //       return scales.x(d.x);
  //     })
  //   .transition()
  //     .duration(ANIMATION_DURATION)
  //     .attr('cx', function(d) { return scales.x(d.x); });
  //
  // point.attr('cy', function(d) { return scales.y(d.y); })
  //     .attr('r', function(d) { return scales.z(d.z); })
  //     .on('mouseout', function(d) {
  //       dispatcher.emit('point:mouseout', d);
  //     })
  //   .transition()
  //     .duration(ANIMATION_DURATION)
  //     .attr('cx', function(d) { return scales.x(d.x); });
  //
  // if (prevScales) {
  //   point.exit()
  //     .transition()
  //       .duration(ANIMATION_DURATION)
  //       .attr('cx', function(d) { return scales.x(d.x); })
  //       .remove();
  // }
  // else {
  //   point.exit()
  //       .remove();
  // }
};

// ns._drawTooltips = function(el, scales, tooltips, prevScales) {
//   var g = d3.select(el).selectAll('.d3-tooltips');
//
//   var tooltipRect = g.selectAll('.d3-tooltip-rect')
//     .data(tooltips, function(d) { return d.id; });
//
//   tooltipRect.enter().append('rect')
//       .attr('class', 'd3-tooltip-rect')
//       .attr('width', TOOLTIP_WIDTH)
//       .attr('height', TOOLTIP_HEIGHT)
//       .attr('x', function(d) {
//         if (prevScales) {
//           return prevScales.x(d.x) - TOOLTIP_WIDTH/2;
//         }
//         return scales.x(d.x) - TOOLTIP_WIDTH/2;
//       })
//     .transition()
//       .duration(ANIMATION_DURATION)
//       .attr('x', function(d) { return scales.x(d.x) - TOOLTIP_WIDTH/2; });
//
//   tooltipRect.attr('y', function(d) { return scales.y(d.y) - scales.z(d.z)/2 - TOOLTIP_HEIGHT; })
//     .transition()
//       .duration(ANIMATION_DURATION)
//       .attr('x', function(d) { return scales.x(d.x) - TOOLTIP_WIDTH/2; });
//
//   if (prevScales) {
//     tooltipRect.exit()
//       .transition()
//         .duration(ANIMATION_DURATION)
//         .attr('x', function(d) { return scales.x(d.x) - TOOLTIP_WIDTH/2; })
//         .remove();
//   }
//   else {
//     tooltipRect.exit()
//         .remove();
//   }
//
//   var tooltipText = g.selectAll('.d3-tooltip-text')
//     .data(tooltips, function(d) { return d.id; });
//
//   tooltipText.enter().append('text')
//       .attr('class', 'd3-tooltip-text')
//       .attr('dy', '0.35em')
//       .attr('text-anchor', 'middle')
//       .text(function(d) { return d.z; })
//       .attr('x', function(d) {
//         if (prevScales) {
//           return prevScales.x(d.x);
//         }
//         return scales.x(d.x);
//       })
//     .transition()
//       .duration(ANIMATION_DURATION)
//       .attr('x', function(d) { return scales.x(d.x); });
//
//   tooltipText.attr('y', function(d) { return scales.y(d.y) - scales.z(d.z)/2 - TOOLTIP_HEIGHT/2; })
//     .transition()
//       .duration(ANIMATION_DURATION)
//       .attr('x', function(d) { return scales.x(d.x); });
//
//   if (prevScales) {
//     tooltipText.exit()
//       .transition()
//         .duration(ANIMATION_DURATION)
//         .attr('x', function(d) { return scales.x(d.x); })
//         .remove();
//   }
//   else {
//     tooltipText.exit()
//         .remove();
//   }
// };

ns.destroy = function(el) {

};
