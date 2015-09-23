
var ResultNav = React.createClass({

  render: function(){
    return (
      <div id="result-nav">
            <ul id="result-nav-list">
              <li>
                <button onClick={this.changeTab}
                  className="btn-result-nav"
                  value="vis">
                    Visualize
                </button>
              </li>
              <li><button onClick={this.changeTab}
                className="btn-result-nav"
                value="raw">Raw Data</button></li>
            </ul>
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
