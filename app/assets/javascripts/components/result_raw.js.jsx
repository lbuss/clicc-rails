var ResultRaw = React.createClass({

  render: function() {
    var result;
    var view;
    curr_chem = this.props.chem;

    if(this.props.chem){
      view = recursive_list(this.props.chem.results)
    }else{
      var view = 'Please enter a Chemical';
    }

    return(
      <div id="result-raw">
        {view}
      </div>
    )

    // function recursive_list(possibleHash){
    //   if(Array.isArray(possibleHash)){
    //     return 'large array placeholder'
    //   }else if (typeof possibleHash !== 'string' &&
    //             typeof possibleHash !== 'number' &&
    //             typeof possibleHash !== 'boolean' &&
    //             possibleHash !== null) {
    //     var children = Object.keys(possibleHash).map(function(key){
    //       recursive_object = recursive_list(possibleHash[key])
    //       return (<li>{key}: {recursive_object}</li>)
    //     })
    //     return <ul>{children}</ul>
    //   }else{
    //     return possibleHash
    //   }
    // 
    // }
  }

});
