(function(root){

  var _info = '';

  var CHANGE_EVENT = 'info_change';

  root.InfoStore = $.extend({}, EventEmitter.prototype, {

    currentInfo: function(){
      return _info;
    },

    changeInfo: function(property){
      _info = PROPERTY_INFO[property];
      InfoStore.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatchID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActionTypes.CHANGE_INFO:
          InfoStore.changeInfo(payload.property);
          break;
      }
    })
  })
})(this);
