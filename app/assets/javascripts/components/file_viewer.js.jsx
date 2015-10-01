var FileViewer = React.createClass({

  render: function() {
    return(
      <div id="file-raw" className='result-block'>
        <h3>{this.props.selectedFile.name}</h3>
        {this.props.selectedFile.object}
      </div>
    )
  },

});
