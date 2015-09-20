var BarGraphBar = React.createClass({
  // chart bar object.
  getInitialState: function() {
    return {text: '', opacity:'arc'};
  },

  render: function() {
    // bar.append("rect")
    // .attr("fill", function(d,i) { return color(i % data.series.length); })
    // .attr("class", "bar")
    // .attr("width", x)
    // .attr("height", barHeight - 1);

    var outerRadius = this.props.width/2.2;
    var innerRadius = this.props.width/8;
    var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);
    var data = this.props.data;
    var center = "translate(" + arc.centroid(data) + ")";
    var percentCenter = "translate(0,3)";
    var color = this.props.colors;
    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <path className={this.state.opacity} fill={color[this.props.ikey]} d={arc(this.props.data)}></path>
        <text fill="white" transform={center} textAnchor="middle" fontSize="15px">{data.value}</text>
        <text fill={color[this.props.ikey]} stroke={color} fontSize="15px" transform={percentCenter} textAnchor="middle">{this.state.text}</text>
      </g>
    );
  },

  onMouseOver: function() {
    this.setState({text: '', opacity:'arc-hover'});
    var percent = (this.props.data.value/this.props.total)*100;
    percent = percent.toFixed(1);
    Actions.setInfo(this.props.name);
    this.setState({text: percent + " %"});
  },

  onMouseOut: function() {
    this.setState({text: '', opacity:'arc'});
  },
});
