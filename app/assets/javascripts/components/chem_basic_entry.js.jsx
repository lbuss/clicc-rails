var ChemBasicEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      file: null,
      MD: null,
      format: 'smiles',
    }
  },

  render: function() {
    return(
    <div id='chem-basic'>
      // <ChemIndex index={this.props.index} tabs={this.props.tabs}/>
      <form className='result-block' id="chem-form-wrapper" onSubmit={this.submitChem}>
        Submit Chemical. Upload EPI Suite 4.1 results text file, and input molecular density. This can be generated using T.E.S.T.
        <br/><br/>
        <input type="file"/ valueLink={this.linkState('file')}>
        <br/><br/>
        <input type="text"/ valueLink={this.linkState('MD')}>
        // <select valueLink={this.linkState('format')}>
        //   <option value="name">NAME</option>
        //   <option value="smiles">SMILES</option>
        //   <option value="casrn">CASRN</option>
        // </select>
        // <br/>
        // <input
        //   type="text"
        //   id="chem-form-key-input"
        //   className="chem-form-text-input"
        //   valueLink={this.linkState('chem')}
        // />
      <br/><br/>
      <input type="submit" value="Submit"/>
      </form>

    </div>
    )
  },

  submitChem: function(e){
    e.preventDefault();
    chem = {'MD': this.state.MD,
            'file': this.state.file}
    ApiActions.submitJob(chem);
  }

});
