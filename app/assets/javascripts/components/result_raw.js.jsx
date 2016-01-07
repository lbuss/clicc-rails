var ResultRaw = React.createClass({

  render: function() {
    var result;
    var view;
    curr_chem = this.props.chem;

    if(this.props.chem){
      var mod_array = Object.keys(this.props.chem.results).map(function(mod_name){
        var property_array = Object.keys(this.props.chem.results[mod_name]).map(function(property_name){
          if(!this.props.chem.results[mod_name][property_name]){
            return <li>
              {property_name}: null
            </li>
          }else if (Array.isArray(this.props.chem.results[mod_name][property_name])) {
            var value_array = Object.keys(this.props.chem.results[mod_name][property_name]).map(function(value){
              return <li>{value}</li>;
            })
          }else{
            return <li>
              {property_name}: {this.props.chem.results[mod_name][property_name]}
            </li>
          }
          return <li><ul>{value_array}</ul></li>;
          }.bind(this))


        return <li>
          {mod_name}:
          <ul>
            {property_array}
          </ul>
          <br/>
        </li>
      }.bind(this))



      view = <div>
        {this.props.chem.smiles}<br/><br/>
        <ul>
          {mod_array}
        </ul>
      </div>
    }else{
      var view = 'Please enter a Chemical';
    }

    return(
      <div id="result-raw">
        {view}
      </div>
    )
  },

});
