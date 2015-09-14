(function(root){

  var _chem = null;

  var CHANGE_EVENT = 'chem_change';

  root.ChemStore = $.extend({}, EventEmitter.prototype, {

    currentChem: function(){
      return _chem;
    },

    newChem: function(chemInfo){
      _chem = chemInfo;
      ChemStore.emit(CHANGE_EVENT);
    },

    notFound: function(){
      _chem = ChemStatus.NOT_FOUND;
      ChemStore.emit(CHANGE_EVENT);
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
          ChemStore.newChem(payload.response[0]);
          break;
      }
    })
  })
})(this);
