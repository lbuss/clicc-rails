var Main = React.createClass({
  getInitialState: function(){
    return{
      tabs: TabStore.currentTabs(),
      chem: ChemStore.currentChem(),
      index: IndexStore.currentIndex(),
      info: InfoStore.currentInfo(),
      localIndex: ChemStore.currentLocals(),
    }
  },

  componentDidMount: function(){
    ChemStore.addChangeListener(this.update);
    IndexStore.addChangeListener(this.update);
    InfoStore.addChangeListener(this.update);
    TabStore.addChangeListener(this.update);
  },

  render: function(){
    var tab;
    switch(this.state.tabs['main']){
      case 'home':
        tab = <Home tabs={this.state.tabs}/>
        break;
      case 'submit':
        tab = <ChemLoader index={this.state.index} tabs={this.state.tabs}/>
        break;
      case 'result':
        tab = <Result chem={this.state.chem}
                      localIndex={this.state.localIndex}
                      tabs={this.state.tabs}
                      info={this.state.info}/>
        break;
    }

    return (
      <div className='main'>
        <MainNav tabs={this.state.tabs}/>
        <div id="main-tab-wrapper">
          {tab}
        </div>
      </div>
    );
  },

  update: function(){
    this.setState({
      tabs: TabStore.currentTabs(),
      chem: ChemStore.currentChem(),
      index: IndexStore.currentIndex(),
      info: InfoStore.currentInfo(),
      localIndex: ChemStore.currentLocals(),
    })
  },
});
