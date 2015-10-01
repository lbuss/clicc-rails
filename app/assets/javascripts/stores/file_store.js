(function(root){

  var _files = [];

  var CHANGE_EVENT = 'files_change';

  root.FileStore = $.extend({}, EventEmitter.prototype, {

    currentFiles: function(){
      return _files;
    },

    newFile: function(file){
      _files.push(file);
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatchID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActionTypes.NEW_FILE:
          FileStore.newFile(payload.file);
          break;

      }
    })
  })
})(this);
