var Vis = React.createClass({

  render: function(){
    var tab;
    if(this.props.chem){
      // switch(this.props.tabs['vis']){
      //   case 'pie':
      //     tab = <div>
      //       <VisNav tabs={this.props.tabs}/>
      //       <PieChart chem={this.props.chem}/>
      //     </div>
      //     break;
      //   case 'bar':
      //     tab = <div>
      //       <VisNav tabs={this.props.tabs}/>
      //       <BarGraph chem={this.props.chem}/>
      //       <PropertyInfo info={this.props.info}/>
      //     </div>
      //     break;
      // }
      var modules_array = Object.keys(this.props.chem.results)
      var value_count = 0;
      modules_array.forEach( function(module_name){
        value_count += this.props.chem.results[module_name].length
      }.bind(this))
    }
    return (
      <div>
        Results for {this.props.chem.smiles}:

        There are results for {modules_array.length} modules containing
        {value_count} values
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
