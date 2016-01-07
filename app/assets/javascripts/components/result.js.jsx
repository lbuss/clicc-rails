var Result = React.createClass({

  render: function() {
    var tab;
    var block;

    if(this.props.chem){
      tab;
      switch(this.props.tabs['result']){
        case 'raw':
          tab = <ResultRaw chem={this.props.chem}/>
          break;
        case 'vis':
          tab = <Vis chem={this.props.chem}
            info={this.props.info}
            tabs={this.props.tabs}/>;
          break;
        case 'mod':
          tab = <ModViewer chem={this.props.chem}
            tabs={this.props.tabs}/>
          break;
        case 'dld':
          tab = <ResultDownload chem={this.props.chem}
            tabs={this.props.tabs}/>
          break;
      }
      block = <div className='result-block'>
        <ResultNav tabs={this.props.tabs}/>
        <div id='result-tab-wrapper'>
          {tab}
        </div>
      </div>
    }else{
      block = <div className='result-block'>
        Please either generate new results or load old ones. Manage local data using the 'Submit' tab.
        <br/><br/>
        Once data has been loaded, interact by clicking 'view results' in the menu to the left.
      </div>
    }

    return(
      <div>
        <ResultLocalIndex index={this.props.localIndex}/>
        {block}
      </div>
    )
  },

});
