var PropertyInfo = React.createClass({
  render: function() {
    return(
      <div id="property-info">
        {this.props.info}
        <br/><br/>
        {PROPERTY_INFO[this.props.info]}
      </div>
    )
  }
});
