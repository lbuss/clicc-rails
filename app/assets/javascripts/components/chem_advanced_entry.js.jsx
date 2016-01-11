var ChemAdvancedEntry = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      expand: {
        'qsar': false,
        'fat': false,
        'exposure':false
      }
    }
  },

  render: function() {
    // valueLink={this.linkState('format')
    var qsar_display = <div onClick={this.expandQ}>
      <h4 id='qsar'>QSAR Settings {this.state.expand.qsar?'-':'+'}</h4>
      {this.state.expand.qsar?<p>QSAR setting go here.</p>:''}
    </div>
    var fat_display = <div onClick={this.expandF}>
      <h4 id='fat'>Fate and Transport Settings {this.state.expand.fat?'-':'+'}</h4>
      {this.state.expand.fat?<div>Environment sheet upload goes here</div>:''}
    </div>
    var exposure_display = <div onClick={this.expandE}>
      <h4 id='exposure'>Exposure Settings {this.state.expand.exposure?'-':'+'}</h4>
      {this.state.expand.exposure?<div>Time to equilibrium etc.</div>:''}
    </div>

    return(
    <div id='chem-advanced'>
      <div className='result-block'>
        {qsar_display}
        {fat_display}
        {exposure_display}
      </div>
    </div>
    )
  },

  expand: function(value) {
    var new_state = this.state;
    new_state.expand[value] = !this.state.expand[value];
    this.setState(new_state);
  },

  expandQ: function(e){
    e.preventDefault();
    this.expand('qsar');
  },

  expandF: function(e){
    e.preventDefault();
    this.expand('fat');
  },

  expandE: function(e){
    e.preventDefault();
    this.expand('exposure');
  },

  submitChem: function(e){
    e.preventDefault();
    ApiActions.findChem(this.state.format, this.state.chem);
  }

});
