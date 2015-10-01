var ChemUpload = React.createClass({

  render: function() {
    return(
    <div id='chem-upload'>
        File Select:
        <form onSubmit={this.loadFile}>
          <input type="file"/>
          <button type='submit'>upload</button>
        </form>
        Load local result data. Eventual support for loading custom module settings used for ADVANCED submission.
    </div>
    )
  },

  loadFile: function(e){
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = this.onReaderLoad;
    reader.readAsText(e.target[0].files[0]);
  },

  onReaderLoad:function(e){
    var file = JSON.parse(e.target.result);
    Actions.newFile(file);
  },
});
