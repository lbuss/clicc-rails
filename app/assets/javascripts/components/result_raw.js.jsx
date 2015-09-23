var ResultRaw = React.createClass({

  render: function() {
    var result;
    var view;
    curr_chem = this.props.chem

    if(this.props.chem){
      if(curr_chem.results && (curr_chem.results === ChemStatus.NOT_FOUND)){
        view = <SubmitJob chem={curr_chem}/>
      }else if(curr_chem.results){
        var resultList = curr_chem.results.map(function(result){
          return <div>
            property: {result.property}<br/>
            value: {result.value}<br/>
            created at: {result.created_at}<br/><br/>
          </div>
        }.bind(this))

        view = <div>
          SMILES: {this.props.chem.smiles}<br/>
          NAME: {this.props.chem.name}<br/>
          CASRN: {this.props.chem.casrn}<br/>
          <div>{resultList}</div>
        </div>
      }
    }else{
      var view = <div>Please enter a Chemical</div>
    }

    return(
      <div id="result-raw">
        {view}
      </div>
    )
  },

});
