var ResultDownload = React.createClass({
  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      fileName: this.props.chem.smiles,
    }
  },

  componentDidMount: function(){
    ChemStore.addChangeListener(this.update);
  },

  render: function() {
    var data = JSON.stringify(this.props.chem);
    var blob = new Blob([data], {type: "text/text"});
    var url  = URL.createObjectURL(blob);

    return(
      <div id="result-download">
        File name:
        <br/>
        <input type='text' valueLink={this.linkState('fileName')}/>
        .txt
        <br/>
        <a href={url} download={this.state.fileName}>Download</a>
      </div>
    )
  },

  update: function(){
    this.setState({
      fileName: ChemStore.currentChem().smiles,
    })
  }

});
