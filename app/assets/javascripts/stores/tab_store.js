(function(root){

  var _tabs = {
    main: 'home',
  };

  var CHANGE_EVENT = 'tab_change';

  root.TabStore = $.extend({}, EventEmitter.prototype, {

    currentTabs: function(){
      return _tabs;
    },

    changeTab: function(property){
      _tabs[property['level']] = property['tab'];

      TabStore.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatchID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActionTypes.CHANGE_TAB:
          TabStore.changeTab(payload.property);
          break;
      }
    })
  })
})(this);
