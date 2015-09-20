var ChemGraphLegendElement = React.createClass({
  render: function() {
    var position =  "translate(" + this.props.xpos + "," + this.props.ypos + ")";
    return (
      <g transform={position}>
        <rect width="18" height="18" fill={this.props.color[this.props.ikey]}></rect>
        <text x="24" y="9" dy=".35em">{this.props.data}</text>
      </g>
    );
  }
});
