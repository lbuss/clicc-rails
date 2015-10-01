(function(root){

  var _file = null;
  var _files = {};

  var CHANGE_EVENT = 'files_change';

  root.FileStore = $.extend({}, EventEmitter.prototype, {
    selectedFile: function(){
      return _file;
    },

    currentFiles: function(){
      return _files;
    },

    isSelected: function(fileName){
      return (fileName === FileStore.selectedFile())?true:false;
    },

    selectFile: function(fileName){
      _file = {
        name:fileName,
        object: _files[fileName]
      };
      FileStore.emit(CHANGE_EVENT);
    },

    newFile: function(file){
      _files[file.name] = file.object;
      FileStore.emit(CHANGE_EVENT);
    },

    deleteFile: function(fileName){
      if(FileStore.isSelected(fileName)){
        _file = null;
      }
      delete _files[fileName];
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
        case ActionTypes.DELETE_FILE:
          FileStore.deleteFile(payload.fileName)
          break;
        case ActionTypes.SELECT_FILE:
          FileStore.selectFile(payload.fileName);
          break;

      }
    })
  })
})(this);
