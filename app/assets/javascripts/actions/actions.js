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

  removeLocalFile: function(fileName){
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_LOCAL_FILE,
      fileName: fileName
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

  newFile: function(file){
    console.log(file);
    AppDispatcher.dispatch({
      actionType: ActionTypes.NEW_FILE,
      file: file
    });
  },

  selectFile: function(fileName){
    AppDispatcher.dispatch({
      actionType: ActionTypes.SELECT_FILE,
      fileName: fileName
    });
  },

  deleteFile: function(fileName){
    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETE_FILE,
      fileName: fileName
    });
  },

  changeTab: function(input){
    AppDispatcher.dispatch({
      actionType: ActionTypes.CHANGE_TAB,
      property: input
    });
  }
}
