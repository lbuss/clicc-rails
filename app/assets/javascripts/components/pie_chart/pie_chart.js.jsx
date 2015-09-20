var PieChart = React.createClass({

  render: function() {
    var data = [];
    if(this.props.chem && this.props.chem.results != 'not_found'){
      data = this.props.chem.results.map(function(res){
        return {name: res.property, count: parseInt(res.value)}
      });


    }


    var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
    return (
      <div>
        <ChemGraphChart width='300' height='300'>
              <ChemGraphData data={data} colors={colors} width='300' height='300'/>
        </ChemGraphChart>
        <ChemGraphLegend data={data} colors={colors} width='200' height='300' />
      </div>
    );
  }
});
