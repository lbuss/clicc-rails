ApiActions = {
  getIndex: function(){
    $.ajax(
      {url:'api/chemicals',
      type: 'GET',
      success: function(resp){
        AppDispatcher.dispatch({
          actionType: ActionTypes.NEW_INDEX,
          response: resp
        });
      }
    })
  },

  findChem: function(format, chem){
    $.ajax(
      {url:'api/chemicals/search_chem',
      type: 'POST',
      data: {format: format,
              chem: chem},
      success: function(resp){
        AppDispatcher.dispatch({
          actionType: ActionTypes.NEW_CHEM,
          response: resp
        });
      }
    })
  },

  submitJob: function(smiles){
    $.ajax(
      {url:'api/chemicals/submit_job',
      type: 'POST',
      data: {smiles: smiles},
      success: function(resp){
        AppDispatcher.dispatch({
          actionType: ActionTypes.NEW_CHEM,
          response: resp
        });
        ApiActions.getIndex()
      }
    })
  },
  // saveTrack: function(track){
  //   console.log('/api/tracks'+(!!track.id ? "/"+track.id : ''))
  //   console.log(track.id)
  //   $.ajax(
  //     {url:'/api/tracks'+(!!track.id ? "/"+track.id : ''),
  //     type: (!!track.id ? "PATCH" : "POST"),
  //     data: {track: track},
  //     success: function(resp){
  //       AppDispatcher.dispatch({
  //         actionType: ActionTypes.LIST_UPDATE,
  //         track_list: resp
  //       });
  //     }}
  //   )
  // },
}
