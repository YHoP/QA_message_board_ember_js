import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var userName = this.get('user');
      if (userName == undefined){
        userName = "anonymous";
      }
      var today = new Date();
      var params = {
        user: userName,
        subject: this.get('subject'),
        content: this.get('content'),
        // location: this.get('location'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        date_added: today.toLocaleString(),
        date_edited: null
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
