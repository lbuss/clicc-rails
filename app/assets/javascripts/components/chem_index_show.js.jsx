var ChemIndexShow = React.createClass({
  getInitialState: function(){
    return{
      retrieving: false,
    }
  },

  render: function() {
    var chem = this.props.chem
    var local = ChemStore.isLocal(chem['name']);
    var buttonText,
        buttonClass,
        divClass;
    if (local){
      divClass = 'menu-el-loaded menu-el';
      buttonClass = 'btn-x';
      buttonText = '\u00D7';
    }else{
      divClass = 'menu-el';
      buttonText = this.state.retrieving?'Retrieving':'Load';
    }

    return(
      <li className={divClass}>
        {chem.smiles}<br/>
        <button className={buttonClass}
        onClick={this.chemAction}>{buttonText}</button>
      </li>
    )
  },

  chemAction: function(e){
    e.preventDefault();
    if(ChemStore.isLocal(this.props.chem['name'])){
      Actions.removeLocal(this.props.chem);
      this.setState({
        retrieving: false
      });
    }else{
      ApiActions.findChem('name', this.props.chem.smiles);
      this.setState({
        retrieving: true
      });
    }
  }

});
