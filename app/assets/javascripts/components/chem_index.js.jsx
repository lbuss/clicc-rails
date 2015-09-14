var ChemIndex = React.createClass({
  componentDidMount: function(){
    ApiActions.getIndex()
  },

  render: function() {
    var view = this.props.index.map(function(chem){
      return <li><ChemIndexShow chem={chem}/></li>
    })

    return(
      <ul>
        {view}
      </ul>
    )
  }
});
