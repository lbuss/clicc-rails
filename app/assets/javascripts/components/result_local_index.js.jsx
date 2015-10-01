var ResultLocalIndex = React.createClass({
  render: function() {
    var view = Object.keys(this.props.index).map(function(smiles){
      var chem = this.props.index[smiles];
      return <ResultLocalIndexShow chem={chem}/>
    }.bind(this))

    return(
      <div id='result-local-index'>
        Local Results:
        <br/>
        <ul className='menu-list'>
          {view}
        </ul>
      </div>
    )
  }
});
