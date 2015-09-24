var VisNav = React.createClass({

  render: function(){
    var buttons = ['bar','pie'].map(function(name){
      var classes = "btn-vis-nav";
      if (this.props.tabs['vis'] === name){
        classes += " active"
      }
      return <li className='vis-el'>
        <button onClick={this.changeTab}
          className={classes}
          value={name}>
            {name}
        </button>
      </li>
    }.bind(this))
    return (
      <div id="vis-nav">
            <ul id="vis-list">
              {buttons}
            </ul>
      </div>
    );
  },


  changeTab: function(event){
    Actions.changeTab({
      level: 'vis',
      tab: event.target.value
    })
  }
});
