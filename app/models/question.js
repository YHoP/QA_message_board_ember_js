import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  subject: DS.attr(),
  content: DS.attr(),
  // location: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  date_added: DS.attr(),
  date_edited: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  sortedAnswers: Ember.computed.sort('answers', function(a, b){
    return b.get('vote') - a.get('vote');
  })
});
