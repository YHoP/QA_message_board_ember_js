import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,

  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },

  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  }

  // center(location) {
  //   var latitude, longitude;
  //   var autocomplete = new google.maps.places.Autocomplete(location);
  //
  //   google.maps.event.addListener(autocomplete, 'place_changed', function () {
  //   var place = autocomplete.getPlace();
  //   latitude = place.geometry.location.lat();
  //   longitude = place.geometry.location.lng();
  //   });
  //
  //   return new this.googleMaps.LatLng(latitude, longitude);
  // }
});
