Actions = {
  setInfo: function(property){
    AppDispatcher.dispatch({
      actionType: ActionTypes.CHANGE_INFO,
      property: property
    });
  },
}
