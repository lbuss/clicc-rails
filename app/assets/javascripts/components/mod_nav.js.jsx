var ModNav = React.createClass({

  render: function(){
    return (
      <div>
        Soon to be a menu.
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
