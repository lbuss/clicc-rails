
var MainNav = React.createClass({

  render: function(){
    return (
      <div id="main-nav">
          <div id="main-nav-center">
            <h1 id="main-nav-brand">CLiCC</h1>
            <ul id="main-nav-list">
              <li className="main-nav-el">
                <button onClick={this.changeTab}
                  className="btn-main-nav"
                  value="home">
                    Home
                </button>
              </li>
              <li className="spacer main-nav-el">-</li>
              <li className="main-nav-el"><button onClick={this.changeTab}
                className="btn-main-nav"
                value="submit">Submit</button></li>
              <li className="spacer main-nav-el">-</li>
              <li className="main-nav-el"><button onClick={this.changeTab}
                className="btn-main-nav"
                value="result">Result</button></li>
            </ul>
          </div>
      </div>
    );
  },


  changeTab: function(event){
    Actions.changeTab({
      level: 'main',
      tab: event.target.value
    })
  }
});
