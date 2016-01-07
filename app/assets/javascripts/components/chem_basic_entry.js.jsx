var ChemBasicEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      MD: null,
    }
  },

  render: function() {
    return(
      <div id='chem-basic'>
        <form className='result-block' id="chem-form-wrapper" onSubmit={this.fileParse}>
          Submit Chemical. Upload EPI Suite 4.1 results text file, and input molecular density. This can be generated using T.E.S.T.
          <br/><br/>
          <input type="file"/>
          <br/><br/>
          <input type="text" valueLink={this.linkState('MD')}/>
          <br/><br/>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    )
  },

  fileParse: function(e){
    //TODO:support multiple files.
    //ugly closure to grab file name before File Reader discards it.
    var fileName;
    var that = this;
    loadFile(e);

    function loadFile(e){
      e.preventDefault();
      var reader = new FileReader();
      reader.onload = submitChem;
      var file = e.target[0].files[0];
      fileName = file.name;
      reader.readAsText(file);
    };

    function submitChem(e){
      e.preventDefault();

      chem = {'MD': that.state.MD,
              'file': e.target.result}
      ApiActions.submitJob(chem);
    };

    function onReaderLoad(e){
      // fires asynch at end of 'readAsText', hence the closure to capture fileName
      // var fileObject = JSON.parse(e.target.result);
      // Actions.newFile({
      //   name: fileName,
      //   object: fileObject});
    };
  }
});

// <ChemIndex index={this.props.index} tabs={this.props.tabs}/>


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
