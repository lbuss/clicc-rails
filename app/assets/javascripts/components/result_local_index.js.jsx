var ResultLocalIndex = React.createClass({
  componentDidMount: function(){
    ApiActions.getIndex()
  },

  render: function() {
    var view = Object.keys(this.props.index).map(function(smiles){
      var chem = this.props.index[smiles];
      return <li><ResultLocalIndexShow chem={chem}/></li>
    }.bind(this))

    return(
      <ul>
        Local Results:
        <br/>
        {view}
      </ul>
    )
  }
});
