(function(root){

  var file = null;
  var _files = {};

  var CHANGE_EVENT = 'files_change';

  root.FileStore = $.extend({}, EventEmitter.prototype, {
    currentFile: function(){

    },

    currentFiles: function(){
      return _files;
    },

    newFile: function(file){
      _files[file.name] = file.object;
      FileStore.emit(CHANGE_EVENT);
    },

    removeLocal: function(file){
      if(FileStore.isCurrent(file['smiles'])){
        _file = null;
        Store.clear();
      }
      delete _files[file['smiles']];
      FileStore.emit(CHANGE_EVENT);
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
