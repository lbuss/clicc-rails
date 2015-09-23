var Result = React.createClass({

  render: function() {
    return(
      <div>
        <ResultLocalIndex index={this.props.localIndex}/>
        <Chem chem={this.props.chem}/>
      </div>
    )
  },

});
