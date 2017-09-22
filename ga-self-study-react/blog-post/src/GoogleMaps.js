import React, { Component } from 'react';

class GoogleMaps extends Component {
  render() {
    return(
      <div>
        <div id="map"></div>
          <script>
            let map;
            function initMap() {
              map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
              })
            }
          </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
      </div>
    }
  )
}

export default GoogleMaps;
