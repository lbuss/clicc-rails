var ChemAdvEntryNav = React.createClass({

  render: function(){
    var tabNames = {
      fat: 'Fate & Transport',
      tox: 'Toxicity',
      prd: 'Production',
      rls: 'Release',
    };

    var level = 'advanced';

    var view = Object.keys(tabNames).map(function(key){
      var props = {
        tab: key,
        text: tabNames[key],
        tabs: this.props.tabs,
        level: level
      }

      return <ChemAdvEntryNavEl {...props}/>
    }.bind(this));

    return (
      <ul className='menu-list' id="advanced-nav">
            {view}
      </ul>
    );
  },
});
