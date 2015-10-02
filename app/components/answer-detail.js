import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(answer,params) {
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
