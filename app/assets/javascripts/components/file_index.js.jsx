var FileIndex = React.createClass({

  render: function() {
    var view = Object.keys(this.props.files).map(function(fileName){
      return <FileIndexShow fileName={fileName}
                file={this.props.files[fileName]}/>
    }.bind(this));

    return(
      <ul className='menu-list result-block'>
        <li>Files:</li>
        {view}
      </ul>
    )
  }
});
