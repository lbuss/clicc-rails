var Result = React.createClass({

  render: function() {
    var tab;
    switch(this.props.tabs['result']){
      case 'raw':
        tab = <ResultRaw chem={this.props.chem}/>
        break;
      case 'vis':
        tab = <Vis chem={this.props.chem}
          info={this.props.info}
          tabs={this.props.tabs}/>;
        break;
    }
    return(
      <div>
        <ResultLocalIndex index={this.props.localIndex}/>
        <div className='result-block'>
          <ResultNav tabs={this.props.tabs}/>
          <div id='result-tab-wrapper'>
            {tab}
          </div>
        </div>
      </div>
    )
  },

});
