var ModViewer = React.createClass({

  render: function(){
    var tab;
    if(this.props.chem){
      switch(this.props.tabs['mod']){
        default:
          tab = <div>
            'nothing here right now.'
          </div>
      }
    }
    return (
      <div id='mod-viewer-wrapper'>
        <ModNav tabs={this.props.tabs}/>
          {tab}
      </div>
    );
  },
});
