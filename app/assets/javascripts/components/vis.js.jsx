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
      var value_count = recursive_length_count(this.props.chem.results)
    }
    return (
      <div>
        <h3>Results for {this.props.chem.smiles}:</h3>

        <p>There are results for {modules_array.length} modules containing {value_count} values</p>
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
