var BarGraph = React.createClass({
  getDefaultProps: function() {
    return {
      width: '500px',
      height: '100px'
    };
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    ns.create(el, this.props);
    if(this.props.chem){
      ns.update(el, this.props.chem);
    }
    // dispatcher.on('point:mouseover', this.showTooltip);
    // dispatcher.on('point:mouseout', this.hideTooltip);

  },

  componentDidUpdate: function() {
    var el = React.findDOMNode(this);
    ns.removeContent(el);
    if(this.props.chem){
      ns.update(el, this.props.chem);
    }
  },

  // getChartState: function() {
  //   var appState = this.props.appState;
  //
  //   var tooltips = [];
  //   if (appState.showingAllTooltips) {
  //     tooltips = appState.data;
  //   }
  //   else if (appState.tooltip) {
  //     tooltips = [appState.tooltip];
  //   }
  //
  //   return _.assign({}, appState, {tooltips: tooltips});
  // },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  },

  // showTooltip: function(d) {
  //   if (this.props.appState.showingAllTooltips) {
  //     return;
  //   }
  //
  //   this.props.setAppState({
  //     tooltip: d,
  //     // Disable animation
  //     prevDomain: null
  //   });
  // },
  //
  // hideTooltip: function() {
  //   if (this.props.appState.showingAllTooltips) {
  //     return;
  //   }
  //
  //   this.props.setAppState({
  //     tooltip: null,
  //     prevDomain: null
  //   });
  // }
});
