import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var today = new Date();
      var params = {
        author: this.get('username'),
        content: this.get('content'),
        date_added: today.toLocaleString(),
        date_edited: "",
        question: this.question
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
