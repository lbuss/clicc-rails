var ModNav = React.createClass({

  render: function(){
    var tabNames = {
      mod1: 'This',
      mod2: 'Isn\'t',
      mod3: 'Finished'
    }

    var level = 'mod';

    return (
      <div className='menu-list' id="mod-nav">
        <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
      </div>
    );
  }
});
