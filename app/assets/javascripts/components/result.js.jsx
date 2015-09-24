var Result = React.createClass({

  render: function() {
    var tab;
    var block;

    if(this.props.chem){
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
    }

    return(
      <div>
        <ResultLocalIndex index={this.props.localIndex}/>

          {block}

      </div>
    )
  },

});
