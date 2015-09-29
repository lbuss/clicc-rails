var PieChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      width: 300,
      height: 350,
      Legend: true,
    };
  },

  render: function() {
    return (
      <div>
        <h4> {this.props.chem.smiles} </h4>
      </div>
    );
  },

  componentDidMount: function() {
    var el = React.findDOMNode(this);
    pc.createChart(el, this.props);
    pc.update(el, this.props);
  },

  componentDidUpdate: function() {
      var el = React.findDOMNode(this);
      pc.removeContent(el);
      if(this.props.chem){
        pc.update(el, this.props);
      }
  }
});
