var Vis = React.createClass({

  render: function(){
    var tab;
    if(this.props.chem){
      switch(this.props.tabs['vis']){
        case 'pie':
          tab = <div>
            <VisNav tabs={this.props.tabs}/>
            <PieChart chem={this.props.chem}/>
            <PropertyInfo info={this.props.info}/>
          </div>
          break;
        case 'bar':
          tab = <div>
            <VisNav tabs={this.props.tabs}/>
            <BarGraph chem={this.props.chem}/>
            <PropertyInfo info={this.props.info}/>
          </div>
          break;
      }
    }
    return (
      <div>
          {tab}
      </div>
    );
  },


  changeTab: function(event){
    Actions.changeTab({
      level: 'result',
      tab: event.target.value
    })
  }
});
