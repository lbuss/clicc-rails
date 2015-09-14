var ChemLoader = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      chem: '',
      format: 'smiles',
    }
  },

  render: function() {
    return(
      <form id="chem-form-wrapper" onSubmit={this.submitChem}>
        <br/>
        Submit Chemical
        <br/>
        <select valueLink={this.linkState('format')}>
          <option value="name">NAME</option>
          <option value="smiles">SMILES</option>
          <option value="casrn">CASRN</option>
        </select>
        <br/>
        <input
          type="text"
          id="chem-form-key-input"
          className="chem-form-text-input"
          valueLink={this.linkState('chem')}
        />
      <br/>
      <input type="submit" value="Submit"/>
      </form>
    )
  },

  submitChem: function(e){
    e.preventDefault();
    ApiActions.findChem(this.state.format, this.state.chem);
  }

});
