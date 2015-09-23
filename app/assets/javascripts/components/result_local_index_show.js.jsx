var ResultLocalIndexShow = React.createClass({
  render: function() {
    var chem = this.props.chem
    var current = ChemStore.isCurrent(chem['smiles']);
    var buttonText = current?'Currently viewing':(<button onClick={this.makeCurrent}>View Results</button>);
    return(
      <div>
        {chem.smiles}{buttonText}
      </div>
    )
  },

  makeCurrent: function(e){
    e.preventDefault();
    Actions.makeCurrent(this.props.chem);
  }

});
