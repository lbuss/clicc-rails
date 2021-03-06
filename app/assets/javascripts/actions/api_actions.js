ApiActions = {
  getOrFetchIndex: function(){
    if(IndexStore.currentIndex().length <=0){
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
    }
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
          chem: resp[0]
        });
      }
    })
  },

  submitJob: function(chem){
    $.ajax(
      {url:'api/chemicals/submit_job',
      type: 'POST',
      data: {MD: chem.MD,
            file: chem.file},
      success: function(resp){
        AppDispatcher.dispatch({
          actionType: ActionTypes.JOB_RESPONSE,
          response: resp
        });
      },
      error: function(resp){
        AppDispatcher.dispatch({
          actionType: ActionTypes.JOB_RESPONSE_ERROR,
          response: resp
        });
      }
        // ApiActions.getIndex()
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
