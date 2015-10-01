var FileViewer = React.createClass({

  render: function() {
    return(
      <div id="file-raw">
        <h3>{this.props.selectedFile.name}</h3>
        {this.props.selectedFile.object}
      </div>
    )
  },

});
