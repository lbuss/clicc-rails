var ChemAdvEntryNavEl = React.createClass({

  render: function(){
    var classes = 'Adv-entry-nav-el ' + this.props.tab;
    if(this.props.tabs[this.props.level] === this.props.tab){
      classes += ' menu-el-loaded';
    }

    return (
      <li data-tab={this.props.tab}
          className={classes}
          onClick={this.changeTab}>
          {this.props.text}
      </li>
    );
  },

  changeTab: function(event){
    Actions.changeTab({
      level: this.props.level,
      tab: event.target.dataset.tab
    })
  }
});
