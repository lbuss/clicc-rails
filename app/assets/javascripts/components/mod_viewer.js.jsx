var ModViewer = React.createClass({

  render: function(){
    var tab;
    if(this.props.chem){
      switch(this.props.tabs['mod']){
        case 'mod1':
          tab='Some special thing.';
          break;
        case 'mod2':
          tab='Another special secret.';
          break;
        case 'mod3':
          tab='Move Along.';
          break;
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
