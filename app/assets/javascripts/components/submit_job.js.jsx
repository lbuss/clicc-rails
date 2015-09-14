var SubmitJob = React.createClass({
  getInitialState: function(){
    return null;
  },

  componentDidMount: function(){
  },

  render: function(){
    var id;
    if(this.props.chem.name){
      id = this.props.chem.name
    }else if(this.props.chem.smiles){
      id = this.props.chem.smiles
    }else if(this.props.chem.casrn){
      id = this.props.chem.casrn
    }

    return (
      <div>
        No results found for {id}
        <br/>
        Would you like to submit a job?
        <form id="chem-form-wrapper" onSubmit={this.submitJob}>
          <input type="submit" value="Submit Job"/>
        </form>
      </div>
    );
  },

  submitJob: function(e){
    e.preventDefault();
    ApiActions.submitJob(this.props.chem.smiles);
  }
});
