var ChemIndex = React.createClass({
  componentDidMount: function(){
    ApiActions.getOrFetchIndex();
  },

  render: function() {
    var view = this.props.index.map(function(chem){
      return <ChemIndexShow chem={chem}/>
    })

    return(
      <ul className='menu-list result-block'>
        <li>Load from Server:</li>
        {view}
      </ul>
    )
  }
});
