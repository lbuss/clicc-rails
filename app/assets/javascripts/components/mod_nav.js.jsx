var ModNav = React.createClass({

  render: function(){
    var tabNames = Object.keys(this.props.chem.results)

    var level = 'mod';

    return (
      <div className='menu-list' id="mod-nav">
        <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
      </div>
    );
  }
});
