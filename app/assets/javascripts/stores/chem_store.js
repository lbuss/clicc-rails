(function(root){

  var _chem = null;
  var _chems = {};

  var CHANGE_EVENT = 'chem_change';

  root.ChemStore = $.extend({}, EventEmitter.prototype, {

    currentChem: function(){
      return _chem;
    },

    currentLocals: function(){
      return _chems;
    },

    isLocal: function(smiles){
      if(_chems[smiles]){
        return true;
      }
      return false;
    },

    isCurrent: function(smiles){
      if (_chem && (_chem['smiles'] === smiles)){
        return true;
      }else{
        return false;
      }
    },

    makeCurrent: function(chem){
      _chem = chem;
      ChemStore.emit(CHANGE_EVENT);
    },

    newChem: function(results){
      chem = {
        'smiles': results['qsar']['smiles'],
        'results': results
      }
      _chems[chem['smiles']] = chem;
      ChemStore.emit(CHANGE_EVENT);
    },

    removeLocal: function(chem){
      if(ChemStore.isCurrent(chem['smiles'])){
        _chem = null;
        InfoStore.clearInfo();
      }
      delete _chems[chem['smiles']];
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
          ChemStore.newChem(payload.chem);
          break;
        case ActionTypes.REMOVE_LOCAL:
          ChemStore.removeLocal(payload.chem)
          break;
        case ActionTypes.MAKE_CURRENT:
          ChemStore.makeCurrent(payload.chem);
          break;
        case ActionTypes.JOB_RESPONSE:
          ChemStore.newChem(payload.results);
          break;
      }
    })
  })
})(this);
