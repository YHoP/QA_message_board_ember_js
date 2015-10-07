import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var today = new Date();
      var params = {
        user: this.get('user'),
        subject: this.get('subject'),
        content: this.get('content'),
        date_added: today.toLocaleString(),
        date_edited: ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
