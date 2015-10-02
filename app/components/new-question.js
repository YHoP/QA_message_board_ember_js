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
        author: this.get('author'),
        subject: this.get('subject'),
        content: this.get('content'),
        date_added: today.toString()
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
