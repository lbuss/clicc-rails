(function(root){

  var _request = null;

  var CHANGE_EVENT = 'request_change';

  root.RequestStore = $.extend({}, EventEmitter.prototype, {

    currentRequest: function(){
      return _request;
    },

    handleRequest: function(response){
      // if(response.valid){
      //   _request = {
      //     'valid': true,
      //     'status': 'Results Ready',
      //     'message': 'Results were successfully calculated and uploaded. Please check the Results tab to interact with them.'
      //   }
      // }else{
      //   _request = {
      //     'valid': false,
      //     'status': 'Something Went Wrong',
      //     'message': 'Results were not successfully return. Please check the chemical density is correct for the EPI suite results you have uploaded.'
      //   }
      // }
      RequestStore.emit(CHANGE_EVENT);
      if(response.results){
        ChemStore.newChem(response.results)
      }
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatchID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActionTypes.JOB_RESPONSE:
          RequestStore.handleRequest(payload.response);
          break;
      }
    })
  })
})(this);
