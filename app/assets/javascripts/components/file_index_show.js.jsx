var FileIndexShow = React.createClass({

  render: function() {

    var divClass = 'menu-el';
    if (FileStore.isSelected(this.props.fileName)){
      divClass += 'menu-el-loaded';
    }

    return(
      <li onClick={this.selectFile} className={divClass}>
        {this.props.fileName}:
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
