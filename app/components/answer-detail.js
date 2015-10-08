import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(answer, params) {
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    },

    likeAnswer(answer){
      debugger;
      var voteCount = this.vote + 1;
      var params = {
        vote: voteCount
      };
      this.sendAction('likeAnswer', answer, params)
    }
  }
});
