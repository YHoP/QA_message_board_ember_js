import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', { async: true }),
  user: DS.attr(),
  content: DS.attr(),
  date_added: DS.attr(),
  date_edited: DS.attr()
});
