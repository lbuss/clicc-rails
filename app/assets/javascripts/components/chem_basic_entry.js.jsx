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
      <form id="chem-form-wrapper" onSubmit={this.submitChem}>
        Submit Chemical. All options submit a job with the entered value as 'smiles' currently(the dropdown
          does nothing as I have not implemented a feature to convert name or casrn to a smiles just yet).
          Clicking 'Load' will grab those results from server to local. 'Purge' deletes local content but
          not server content.
        <br/><br/>
        Note: Weird Bug. The work server starts returning CSRF errors after awhile despite Flask not having any sort
        of default CSRF protection. This problem goes away for awhile when the app is reloaded but returns later.
        Problem may have something to do with the host, PythonAnywhere. Possibly an issue with Flask version. If submitting
        new chems isn't working, just load previously computed ones.
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
      <ChemIndex index={this.props.index} tabs={this.props.tabs}/>
    </div>
    )
  },

  submitChem: function(e){
    e.preventDefault();
    ApiActions.submitJob(this.state.chem);
  }

});
