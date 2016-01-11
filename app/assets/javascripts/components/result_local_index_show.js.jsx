var ResultLocalIndexShow = React.createClass({
  render: function() {
    var chem = this.props.chem
    var current = ChemStore.isCurrent(chem['name']);
    var buttonText = current?'Currently viewing':(<button onClick={this.makeCurrent}>View Results</button>);
    var liClass = current?'menu-el-loaded menu-el':'menu-el';
    return(
      <li className={liClass}>
        {chem.name}<br/>
        {buttonText}
      </li>
    )
  },

  makeCurrent: function(e){
    e.preventDefault();
    Actions.makeCurrent(this.props.chem);
  }

});
