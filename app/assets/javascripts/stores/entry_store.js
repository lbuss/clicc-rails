(function(root){

  var _entry = {};

  var CHANGE_EVENT = 'entry_change';

  root.EntryStore = $.extend({}, EventEmitter.prototype, {

    currentEntry: function(){
      return _entry;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatchID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActionTypes.NEW_CHEM:
          break;

      }
    })
  })
})(this);
