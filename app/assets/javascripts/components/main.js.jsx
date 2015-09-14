var Main = React.createClass({
  getInitialState: function(){
    return{
      chem: ChemStore.currentChem(),
      index: IndexStore.currentIndex(),
      info: InfoStore.currentInfo(),
    }
  },

  componentDidMount: function(){
    ChemStore.addChangeListener(this.update);
    IndexStore.addChangeListener(this.update);
    InfoStore.addChangeListener(this.update);
  },

  render: function(){
    return (
      <div id="main">
        <div className='menu'>
          <ChemLoader/>
          <ChemIndex index={this.state.index}/>
        </div>
        <div className='display'>
          <Chem chem={this.state.chem}/>
        </div>
        <div className='graph'>
          <ChemGraph chem={this.state.chem}/>
          <PropertyInfo info={this.state.info}/>
        </div>
      </div>
    );
  },

  update: function(){
    this.setState({
      chem: ChemStore.currentChem(),
      index: IndexStore.currentIndex(),
      info: InfoStore.currentInfo(),
    })
  },
});
