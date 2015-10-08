export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(question) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(question.get('latitude'), question.get('longitude')),
        zoom: 10
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


// Google Maps - ?
//
// var geocoder;
// var map;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(45.542, -122.654);
//   var mapOptions = {
//     zoom: 3,
//     center: latlng
//   }
//   map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }
//
// function codeAddress() {
//   // var address = document.getElementById("location").value;
//   var address = model.questions.location;
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }
