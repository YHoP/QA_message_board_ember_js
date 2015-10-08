import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(answer, params) {
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    },

    likeAnswer(answer){
      debugger;
      var voteCount = answer.get('vote');
      voteCount += 1;
      var params = {
        vote: voteCount
      };
      this.sendAction('editAnswer', answer, params)
    }
  }
});
