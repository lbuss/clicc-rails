var ChemUpload = React.createClass({

  render: function() {
    var viewFile;
    if(this.props.selectedFile){
      viewFile = <FileViewer selectedFile={this.props.selectedFile}/>
    }
    return(
    <div id='chem-upload'>
        File Select:
        <form onSubmit={this.fileParse}>
          <input type="file"/>
          <button type='submit'>upload</button>
        </form>
        Load local result data. Eventual support for loading custom module settings used for ADVANCED submission.
        <br/>
        <FileIndex files={this.props.files}/>
        {viewFile}
    </div>
    )
  },


  fileParse: function(e){
    //TODO:support multiple files.
    //ugly closure to grab file name before File Reader discards it.
    var fileName;
    loadFile(e);

    function loadFile(e){
      e.preventDefault();
      var reader = new FileReader();
      reader.onload = onReaderLoad;
      var file = e.target[0].files[0];
      fileName = file.name;
      reader.readAsText(file);
    };

    function onReaderLoad(e){
      // fires asynch at end of 'readAsText', hence the closure to capture fileName
      var fileObject = JSON.parse(e.target.result);
      Actions.newFile({
        name: fileName,
        object: fileObject});
    };
  }
});
