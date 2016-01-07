var ModViewer = React.createClass({

  render: function(){
    var tab;
    if(this.props.chem){
      // switch(this.props.tabs['mod']){
      //   default:
      //     tab = <div>
      //       'Select module to view.'
      //     </div>
      // }
      tab = <div>
        {this.props.chem.smiles}:
        <br/>
        {this.props.chem.results[this.props.tabs['mod']]}
      </div>
    }
    return (
      <div id='mod-viewer-wrapper'>
        <ModNav chem={this.props.chem} tabs={this.props.tabs}/>
          {tab}
      </div>
    );
  },
});
