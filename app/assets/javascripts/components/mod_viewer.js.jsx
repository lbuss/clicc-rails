var ModViewer = React.createClass({

  render: function(){
    var tab;
    if(this.props.chem){
      switch(this.props.tabs['mod']){
        case 'mod1':
          tab='Display for mod 1';
          break;
        case 'mod2':
          tab='Display for mod 2';
          break;
        case 'mod3':
          tab='Display for mod 3';
          break;
        default:
          tab = <div>
            'Select module to view.'
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
