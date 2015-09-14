(function(root){

  var _index = [];

  var CHANGE_EVENT = 'index_change';

  root.IndexStore = $.extend({}, EventEmitter.prototype, {

    currentIndex: function(){
      return _index;
    },

    newIndex: function(chemInfo){
      _index = chemInfo;
      IndexStore.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatchID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActionTypes.NEW_INDEX:
          IndexStore.newIndex(payload.response);
          break;
      }
    })
  })
})(this);
