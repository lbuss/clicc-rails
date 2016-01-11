function recursive_list(possibleHash){
  if(Array.isArray(possibleHash)){
    var array = []
    for(i=0; i<4; i++){
      if(i === 0){
        array.push(<li>[ {possibleHash[i]},</li>)
      }else{
        array.push(<li>{possibleHash[i]},</li>)
      }
    }
    array.push(<li>..., ]</li>)
    return <div>array({possibleHash.length}): <ul style={{listStyle: 'none'}}>{array}</ul></div>
  }else if (typeof possibleHash !== 'string' &&
            typeof possibleHash !== 'number' &&
            typeof possibleHash !== 'boolean' &&
            possibleHash !== null) {
    var children = Object.keys(possibleHash).map(function(key){
      recursive_object = recursive_list(possibleHash[key])
      return (<li>{key}: {recursive_object}</li>)
    })
    return <ul>{children}</ul>
  }else{
    return possibleHash
  }
}

function recursive_length_count(possibleHash){
  if(Array.isArray(possibleHash)){
    return possibleHash.length
  }else if (typeof possibleHash !== 'string' &&
            typeof possibleHash !== 'number' &&
            typeof possibleHash !== 'boolean' &&
            possibleHash !== null) {
    var count = Object.keys(possibleHash).map(function(key){
      count = recursive_length_count(possibleHash[key])
      return count
    })
    return count.reduce(function(a, b) {return a + b });
  }else{
    return 1
  }
}
