export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(question) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(question.get('latitude'), question.get('longitude')),
        zoom: 10
      };
      var marker=new google.maps.Marker({
        position: (question.get('latitude'), question.get('longitude')),
      });

      marker.setMap(this.get('map'));
      this.get('map').findMap(container, options);
    }
  }
});
