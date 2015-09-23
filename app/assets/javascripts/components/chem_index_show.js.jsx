var ChemIndexShow = React.createClass({
  getInitialState: function(){
    return{

    }
  },

  render: function() {
    var chem = this.props.chem
    var local = ChemStore.isLocal(chem['smiles']);
    var buttonText = local?'Purge':'Load';
    return(
      <div>
        {chem.smiles}<button onClick={this.chemAction}>{buttonText}</button>
      </div>
    )
  },

  chemAction: function(e){
    e.preventDefault();
    if(ChemStore.isLocal(this.props.chem['smiles'])){
      Actions.removeLocal(this.props.chem);
    }else{
      ApiActions.findChem('smiles', this.props.chem.smiles);
    }
  }

});
