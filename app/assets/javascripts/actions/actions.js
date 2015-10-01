Actions = {
  setInfo: function(property){
    AppDispatcher.dispatch({
      actionType: ActionTypes.CHANGE_INFO,
      property: property
    });
  },

  removeLocal: function(chem){
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_LOCAL,
      chem: chem
    });
  },

  makeCurrent: function(chem){
    AppDispatcher.dispatch({
      actionType: ActionTypes.MAKE_CURRENT,
      chem: chem
    });
  },

  newChem: function(chem){
    AppDispatcher.dispatch({
      actionType: ActionTypes.NEW_CHEM,
      chem: chem
    });
  },

  changeTab: function(input){
    AppDispatcher.dispatch({
      actionType: ActionTypes.CHANGE_TAB,
      property: input
    });
  }
}
