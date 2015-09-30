var ChemAdvancedEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      chem: '',
      format: 'smiles',
    }
  },

  render: function() {
    var tab;
    switch(this.props.tabs['advanced']){
      case 'fat':
        tab = <form>
          <h3>Placeholder form for Fate/Transport</h3>
          <p>property 1</p>
          <input type='text'/>
          <p>property 2</p>
          <input type='text'/>
          <p>property 3</p>
          <select valueLink={this.linkState('format')}>
            <option value="name">NAME</option>
            <option value="smiles">SMILES</option>
            <option value="casrn">CASRN</option>
          </select>
        </form>
        break;
      case 'tox':
        tab = tab = <form>
          <h3>Placeholder form for Toxicity</h3>
          <p>property 1</p>
          <input type='text'/>
          <p>property 2</p>
          <input type='text'/>
          <p>property 3</p>
          <select valueLink={this.linkState('format')}>
            <option value="name">NAME</option>
            <option value="smiles">SMILES</option>
            <option value="casrn">CASRN</option>
          </select>
        </form>
        break;
      case 'prd':
        tab = tab = <form>
          <h3>Placeholder form for Production</h3>
          <p>property 1</p>
          <input type='text'/>
          <p>property 2</p>
          <input type='text'/>
          <p>property 3</p>
          <select valueLink={this.linkState('format')}>
            <option value="name">NAME</option>
            <option value="smiles">SMILES</option>
            <option value="casrn">CASRN</option>
          </select>
        </form>
        break;
      case 'rls':
        tab = tab = <form>
          <h3>Placeholder form for Release</h3>
          <p>property 1</p>
          <input type='text'/>
          <p>property 2</p>
          <input type='text'/>
          <p>property 3</p>
          <select valueLink={this.linkState('format')}>
            <option value="name">NAME</option>
            <option value="smiles">SMILES</option>
            <option value="casrn">CASRN</option>
          </select>
        </form>
        break;
    }
    return(
    <div id='chem-advanced'>
      <ChemAdvEntryNav tabs={this.props.tabs}/>
      <div className='result-block'>
        {tab}
      </div>
    </div>
    )
  },

  submitChem: function(e){
    e.preventDefault();
    ApiActions.findChem(this.state.format, this.state.chem);
  }

});
