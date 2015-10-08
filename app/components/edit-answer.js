import Ember from 'ember';

export default Ember.Component.extend({
  editAnswerForm: false,
  actions: {
    editAnswerShow() {
      this.set('editAnswerForm', true);
    },

    editAnswer(answer) {
      var today = new Date();
      var params = {
        subject: this.get('subject'),
        content: this.get('content'),
        date_edited: today.toLocaleString(),
        question: this.question
      };
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
