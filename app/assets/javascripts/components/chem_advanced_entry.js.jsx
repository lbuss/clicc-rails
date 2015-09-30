var ChemAdvancedEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      chem: '',
      format: 'smiles',
    }
  },

  fat: 'Fate & Transport',
  tox: 'Toxicity',
  prd: 'Production',
  rls: 'Release',

  render: function() {
    var tab;
    switch(this.props.tabs['advanced']){
      case 'fat':
        tab = 'custom interface stuff';
        break;
      case 'tox':
        tab = 'custom inputs for whatever';
        break;
      case 'prd':
        tab = 'nonsense words';
        break;
      case 'rls':
        tab = 'jernganjfadnfasldnf';
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
