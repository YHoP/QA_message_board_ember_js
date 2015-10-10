import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var userName = this.get('user');
      if (userName == undefined){
        userName = "anonymous";
      }
      var today = new Date();
      var params = {
        user: userName,
        question: this.question,
        content: this.get('content'),
        date_added: today.toLocaleString(),
        date_edited: null,
        // location: this.get('location'),
        vote: 0
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
