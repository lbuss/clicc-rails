var ResultNav = React.createClass({

  render: function(){
    var tabNames = {
      vis: 'Visualize',
      raw: 'Raw Data'
    }
    var level = 'result';

    return (
      <div id="result-nav">
            <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
      </div>
    );
  }
});
