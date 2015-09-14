var ChemIndexShow = React.createClass({
  getInitialState: function(){
    return{

    }
  },

  render: function() {
    var chem = this.props.chem
    return(
      <div>
        {chem.smiles}<button onClick={this.submitChem}>Load</button>
      </div>
    )
  },

  submitChem: function(e){
    e.preventDefault();
    ApiActions.findChem('smiles', this.props.chem.smiles);
  }

});
