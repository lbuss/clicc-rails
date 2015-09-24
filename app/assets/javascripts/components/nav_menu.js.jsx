var NavMenu = React.createClass({
  render: function(){
    var tabs = this.props.tabs
    var tabNames = this.props.tabNames;
    var level = this.props.level;

    var buttons = Object.keys(tabNames).map(function(key){
      var classes = "btn-nav " + level;
      if (this.props.tabs[this.props.level] === key){
        classes += " active";
      }
      return <li key={key}>
        <button onClick={this.changeTab}
          className={classes}
          value={key}>
            {tabNames[key]}
        </button>
      </li>
    }.bind(this))

    return <ul className={"nav-list " + level}>
      {buttons}
    </ul>
  },

  changeTab: function(event){
    Actions.changeTab({
      level: this.props.level,
      tab: event.target.value
    })
  }
});
