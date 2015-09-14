var PropertyInfo = React.createClass({
  render: function() {
    return(
      <div className="propertyInfo">
        {this.props.info}
        <br/><br/>
        {PROPERTY_INFO[this.props.info]}
      </div>
    )
  }
});
