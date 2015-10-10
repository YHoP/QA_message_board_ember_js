export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(question) {
      var geocoder = new google.maps.Geocoder();
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(question.get('latitude'), question.get('longitude')),
        zoom: 15
      };

      var myLatlng = new google.maps.LatLng(question.get('latitude'), question.get('longitude'));
      var marker = new google.maps.Marker({
        position: myLatlng
      });
      var displayMap = this.get('map').findMap(container, options);
      marker.setMap(displayMap);
    }
  }
});
