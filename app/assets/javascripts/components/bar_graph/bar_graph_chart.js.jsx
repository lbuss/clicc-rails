var BarGraphChart = React.createClass({
  // Chart object wrapper. Holds 
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    children: React.PropTypes.node,
  },
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>
      {this.props.children}</svg>
    );
  }
});
