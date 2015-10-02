import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  date_added: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});