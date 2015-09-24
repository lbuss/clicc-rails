var ChemUpload = React.createClass({

  mixins:[React.addons.LinkedStateMixin],

  getInitialState: function(){
    return{
      chem: '',
      format: 'smiles',
    }
  },

  render: function() {
    return(
    <div id='chem-upload'>
      <form id="chem-form-wrapper" onSubmit={this.submitChem}>
        Load local data into visualizer. Not currently available.
      <input type="submit" value="Submit"/>
      </form>
    </div>
  );
  },

  submitChem: function(e){
    e.preventDefault();
    // ApiActions.findChem(this.state.format, this.state.chem);
  }

});
