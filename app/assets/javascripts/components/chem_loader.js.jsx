var ChemLoader = React.createClass({

  render: function() {
    var tab;
    switch(this.props.tabs['loader']){
      case 'basic':
        tab = <ChemBasicEntry index={this.props.index} tabs={this.props.tabs}/>
        break;
      case 'advanced':
        tab = <ChemAdvancedEntry index={this.props.index} tabs={this.props.tabs}/>
        break;
      case 'upload':
        tab = <ChemUpload tabs={this.props.tabs}/>
        break;
    }


    return(
      <div id='chem-loader-wrapper'>
        <ChemLoaderNav tabs={this.props.tabs}/>
        {tab}
      </div>
    )
  },
});
