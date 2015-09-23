var Vis = React.createClass({

  render: function(){
    return (
      <div>
          <PieChart chem={this.props.chem}/>
          <PropertyInfo info={this.props.info}/>
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
