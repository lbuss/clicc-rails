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
    var ft_len = this.props.chem.results.fat.fugacity_results.deep_natural_fugacity.length;
    var exp_len = this.props.chem.results.exposure.In_ingexp.length

    return (
      <div>
        <h3>Results for {this.props.chem.smiles}:</h3>

        <p>There are results for {modules_array.length} modules totaling {value_count} values.</p>

        <p>Fate and Transport calcuted for a period of {ft_len} days.</p>

        <p>Exposure calculated for the latter {exp_len} days of that time.</p>

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
