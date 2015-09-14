// (function(root){
//
//   var _chemQueries = [];
//
//   var CHANGE_EVENT = 'query_change';
//
//   root.QueryStore = $.extend({}, EventEmitter.prototype, {
//
//     currentQuery: function(){
//       return _chemQueries;
//     },
//
//     newQuery: function(query_results){
//       _chemQueries = query_results;
//       ChemStore.emit(CHANGE_EVENT);
//     },
//
//     addChangeListener: function(callback){
//       this.on(CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function(callback){
//       this.removeListener(CHANGE_EVENT, callback);
//     },
//
//     dispatchID: AppDispatcher.register(function(payload){
//       switch(payload.actionType){
//         case ActionTypes.NEW_CHEM:
//           ChemStore.newChem(payload.results);
//           break;
//       }
//     })
//   })
// })(this);
