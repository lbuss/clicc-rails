var ModNav = React.createClass({

  render: function(){
    var tabNames = {
      mod1: 'Module 1',
      mod2: 'Module 2',
      mod3: 'Module 3'
    }

    var level = 'mod';

    return (
      <div className='menu-list' id="mod-nav">
        <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
      </div>
    );
  }
});
