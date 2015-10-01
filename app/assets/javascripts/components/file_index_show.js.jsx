var FileIndexShow = React.createClass({
  render: function() {
    var fileName = this.props.fileName;
    var divClass = 'menu-el';

    if (fileName === FileStore.currentFile()){
      divClass += 'menu-el-loaded';
    }

    return(
      <li onClick={this.selectFile} className={divClass}>
        {fileName}
        <button onClick={this.deleteFile}>{'\u00D7'}</button>
      </li>
    )
  },

  selectFile: function(e) {
    e.preventDefault();
    Actions.selectFile(this.props.fileName);
  },

  deleteFile: function(e) {
    e.preventDefault();
    Actions.deleteFile(this.props.fileName);
  },
});
