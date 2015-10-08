import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  content: DS.attr(),
  date_added: DS.attr(),
  date_edited: DS.attr(),
  vote: DS.attr('number')
});
