function recursive_list(possibleHash){
  if(Array.isArray(possibleHash)){
    return 'large array placeholder'
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
