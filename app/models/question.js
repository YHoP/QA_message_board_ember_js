import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  subject: DS.attr(),
  content: DS.attr(),
  date_added: DS.attr(),
  date_edited: DS.attr(),
  // answers: DS.hasMany('answer', { async: true })
});
