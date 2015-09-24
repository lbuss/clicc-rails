var ResultNav = React.createClass({

  render: function(){
    var tabNames = {
      vis: 'Overview',
      mod: 'By Module',
      raw: 'Raw Data',
      dld: 'Download',
    }
    var level = 'result';

    return (
      <div id="result-nav">
            <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
      </div>
    );
  }
});
