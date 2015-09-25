var ChemLoaderNav = React.createClass({

  render: function(){
    var tabNames = {
      basic: 'Basic',
      advanced: 'Advanced',
      upload: 'Upload'
    }

    var level = 'loader';

    return (
      <div id="loader-nav">
        <NavMenu tabs={this.props.tabs} tabNames={tabNames} level={level}/>
      </div>
    );
  }
});
