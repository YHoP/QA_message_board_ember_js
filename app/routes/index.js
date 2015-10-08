import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      // answers: this.store.findAll('answer').sortBy('vote'),
      allAnswers: this.store.findAll('answer'),
      answers: Ember.computed.sort('allAnswers', function(a, b){
        return b.get('vote') - a.get('vote');
      })
    });
  },

  actions: {
    saveQuestion(params) {
      debugger;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  },

});
