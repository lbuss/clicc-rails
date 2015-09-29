var ChemBasicEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      chem: '',
      format: 'smiles',
    }
  },

  render: function() {
    return(
    <div id='chem-basic'>
      <ChemIndex index={this.props.index} tabs={this.props.tabs}/>
      <form className='result-block' id="chem-form-wrapper" onSubmit={this.submitChem}>
        Submit Chemical. Use local results for now.
        <br/><br/>
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

    </div>
    )
  },

  submitChem: function(e){
    e.preventDefault();
    ApiActions.submitJob(this.state.chem);
  }

});
