import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  isEdited: false,
  actions: {
    editFormShow() {
      this.set('editQuestionForm', true);
    },
    editQuestion(question) {
      var today = new Date();
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        content: this.get('content'),
        date_edited: today.toString()
      };
      this.set('editQuestionForm', false);
      this.set('isEdited', true);
      this.sendAction('editQuestion', question, params);
    }
  }
});
