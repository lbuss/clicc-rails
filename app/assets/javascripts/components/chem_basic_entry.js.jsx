var ChemBasicEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      request_status: null,
      MD: null,
    }
  },

  componentDidMount: function(){
    RequestStore.addChangeListener(this.update);
  },

  componentWillUnmount: function(){
    RequestStore.removeChangeListener(this.update);
  },

  update: function(){
    this.setState({
      request_status: false,
      MD: null,
    });
  },

  render: function() {
    var result;
    if(this.state.request_result){
      result = <div>
        <h3>{this.state.request_result['status']}</h3>
        <p>
          {this.state.request_result['message']}
        </p>
      </div>
    }

    return(
      <div id='chem-basic'>
        <form className='result-block' id="chem-form-wrapper" onSubmit={this.fileParse}>
          <h3>Submit Chemical</h3>
          <p>
            Upload EPI Suite 4.1 results text file, and input molecular density. This can be generated using T.E.S.T.
          </p>
          <input type="file"/>
          <br/><br/>
          MD: <input type="text" valueLink={this.linkState('MD')}/>
          <br/><br/>
          <input type="submit" disabled={this.state.request_status} value={!this.state.request_status?"Submit":"Calculating"}/>
        </form>
        {result}
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
      that.setState({
        request_status: true,
        MD: that.state.MD,
      })
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
