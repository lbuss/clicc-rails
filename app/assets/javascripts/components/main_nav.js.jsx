
var MainNav = React.createClass({

  render: function(){
    var tabNames = {
      home: 'Home',
      submit: 'Submit',
      result: 'Result'
    }

    var level = 'main';

    return (
      <div id="main-nav">
          <div id="main-nav-center">
            <img id="logo" alt="Logo" src="/assets/cliccheader.png" /><br/>
            <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
          </div>
      </div>
    );
  }
});
