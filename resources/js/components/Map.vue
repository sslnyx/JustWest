<template>
  <b-row class="content">
    <b-col cols="12" md="8">
      <div id="gmap" class="gmap"></div>
    </b-col>
    <b-col cols="12" md="4">
      <div v-for="(items,key,i) in list" :key="i" :id="`list${i}`" class="cat">
        <b-button v-b-toggle="`accordion-${i}`">
          {{key}}
          <div class="collapse-button"></div>
        </b-button>
        <b-collapse :visible="key === expanded" :id="`accordion-${i}`" accordion="my-accordion">
          <ol>
            <li v-for="( item, index ) in items" :key="index">
              <h6>{{index}}</h6>
              <p class="m-0" v-if="item">{{item}}</p>
            </li>
          </ol>
        </b-collapse>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      expanded: "shopping",
      list: {
        shopping: {
          "Nesters Market": "",
          "West Coast Kids": "",
          "BC Liquor Stores": "",
          "Windsor Quality Meats": "",
          "The Soap Dispensary and Kitchen Staples": "",
          "Front & Company": "",
          "Vancouver Special": "",
          "Welk’s": "",
          "Barbarella Hair Salon": "",
          "Shoppers Drug Mart": "",
          "Lemonade Gluten Free Bakery": "",
          "Walrus Design Inc": "",
          "Black Dog Video": "",
          "Choices Markets": "",
          "Oakridge Centre": "",
          "King Edward Plaza": "(Including Safeway, City 1 Café & TD Bank)"
        },
        Dining: {
          "Anh and Chi": "",
          "Sun Sui Wah": "",
          "The Acorn Restaurant": "",
          "MeeT on Main": "",
          "East is East": "",
          "Le Marché St. George": "",
          Matchstick: "",
          "The Mighty Oak": "",
          "Vij's": "",
          "Rain or Shine Ice Cream": "",
          Starbucks: "",
          "Landmark Hotpot House": ""
        },
        Schools: {
          "General Wolfe Elementary": "(Catchment)",
          "York House": "(Private)",
          "Eric Hamber Secondary": "(Catchment)",
          "Emily Carr Elementary": "",
          "Sir Charles Tupper Secondary": ""
        },
        Entertainment: {
          "The Park Theatre": "",
          "VanDusen Botanical Garden": "",
          "Nat Bailey Stadium": "",
          "Bloedel Conservatory": ""
        },
        Recreation: {
          "Hillcrest Community and Aquatics Centre": "",
          "Vancouver Lawn Bowling Club": "",
          "Douglas Park": "",
          "Community Centre": "",
          "Mat Collective": ""
        },
        "For the Pets": {
          "Three Dog Bakery": "",
          "Woofgang Pet Supplies": "",
          "The Groom Room": "",
          "unleashed DOG SPA": "",
          "Oak Animal Hospital": ""
        },
        Transit: {
          "King Edward Station": "",
          "Oakridge 41st Station": ""
        }
      }
    };
  },
  methods: {
    myfn(val) {
      console.log(val);
    }
  },
  mounted() {
    // When the window has finished loading create our google map below
    // google.maps.event.addDomListener(window, "load", init);

    window.addEventListener("load", init);

    function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 14,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: {
          lat: 49.248881,
          lng: -123.107313
        }, // Nova Geo site

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [
              {
                hue: "#ff0000"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [
              {
                saturation: "7"
              },
              {
                gamma: "1.09"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified"
              },
              {
                hue: "#0066ff"
              },
              {
                saturation: 74
              },
              {
                lightness: 100
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [
              {
                lightness: "-6"
              },
              {
                saturation: "29"
              },
              {
                weight: "0.01"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on"
              },
              {
                weight: "0.01"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.attraction",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.business",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.government",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.medical",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              },
              {
                hue: "#98ff00"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.place_of_worship",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.school",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.sports_complex",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              },
              {
                weight: "0.01"
              },
              {
                saturation: -85
              },
              {
                lightness: 61
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              },
              {
                lightness: "0"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                saturation: "16"
              },
              {
                lightness: "12"
              },
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
              {
                weight: "10.00"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "transit.station.rail",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified"
              },
              {
                color: "#5f94ff"
              },
              {
                lightness: 26
              },
              {
                gamma: 5.86
              }
            ]
          }
        ]
      };

      // console.log("map initiated");

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById("gmap");

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      function list0(label) {
        // console.log(label);
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#a94545",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 0)
        };
      }

      function list1(label) {
        // console.log(label);
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#e18f55",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 0)
        };
      }

      function list2(label) {
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#6e6c6b",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 0)
        };
      }

      function list3(label) {
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#554f84",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 0)
        };
      }

      function list4(label) {
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#459a8a",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 0)
        };
      }

      function list5(label) {
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#6e6c6b",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 0)
        };
      }

      function list6(label) {
        return {
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          fillColor: "#2793c3",
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 0,
          labelOrigin: new google.maps.Point(0, 5)
        };
      }

      var infoWindow = new google.maps.InfoWindow({
        content: ""
      });

      let markerSet = {
        "#list0": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.040548,
            //   lng: -122.781077
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            for (var i = 0; i < this.length; i++) {
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: (i + 1).toString(),
                  color: "white"
                },
                icon: list0((i + 1).toString()),
                zIndex: 100
              });
              var liValues = [];
              $("#list0 li h6").each(function() {
                liValues.push($(this).text());
              });
              makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            }
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.244939,
            lng: -123.10159
          },
          1: {
            lat: 49.245267,
            lng: -123.101094
          },
          2: {
            lat: 49.245569,
            lng: -123.101485
          },
          3: {
            lat: 49.248594,
            lng: -123.100873
          },
          4: {
            lat: 49.251758,
            lng: -123.10076
          },
          5: {
            lat: 49.2514,
            lng: -123.100619
          },
          6: {
            lat: 49.252703,
            lng: -123.100757
          },
          7: {
            lat: 49.253537,
            lng: -123.101176
          },
          8: {
            lat: 49.256005,
            lng: -123.101581
          },
          9: {
            lat: 49.256791,
            lng: -123.115343
          },
          10: {
            lat: 49.255207,
            lng: -123.115388
          },
          11: {
            lat: 49.254718,
            lng: -123.115006
          },
          12: {
            lat: 49.254589,
            lng: -123.115497
          },
          13: {
            lat: 49.25419,
            lng: -123.115379
          },
          14: {
            lat: 49.23207,
            lng: -123.118682
          },
          15: {
            lat: 49.248472,
            lng: -123.126587
          },
          length: 16
        },
        "#list1": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.14986,
            //   lng: -122.76058
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            for (var i = 0; i < this.length; i++) {
              //   console.log(Object.values(this[i]));
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: (i + 1).toString(),
                  color: "white"
                },
                icon: list1((i + 1).toString()),
                zIndex: 100
              });

              var liValues = [];
              $("#list1 li h6").each(function() {
                // console.log($(this).text());
                liValues.push($(this).text());
              });
              makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            }
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.254997,
            lng: -123.10086
          },
          1: {
            lat: 49.250425,
            lng: -123.100718
          },
          2: {
            lat: 49.249638,
            lng: -123.101338
          },
          3: {
            lat: 49.246755,
            lng: -123.101002
          },
          4: {
            lat: 49.245428,
            lng: -123.101492
          },
          5: {
            lat: 49.245775,
            lng: -123.094435
          },
          6: {
            lat: 49.241834,
            lng: -123.101807
          },
          7: {
            lat: 49.254636,
            lng: -123.109615
          },
          8: {
            lat: 49.257711,
            lng: -123.114804
          },
          9: {
            lat: 49.255157,
            lng: -123.114932
          },
          10: {
            lat: 49.254112,
            lng: -123.114959
          },
          11: {
            lat: 49.249843,
            lng: -123.115581
          },
          length: 12
        },
        "#list2": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.029757,
            //   lng: -122.799063
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            for (var i = 0; i < this.length; i++) {
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: (i + 1).toString(),
                  color: "white"
                  // fontWeight: 'bold'
                },
                icon: list2((i + 1).toString()),
                zIndex: 100
              });
              var liValues = [];
              $("#list2 li h6").each(function() {
                liValues.push($(this).text());
              });
              makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            }
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.247454,
            lng: -123.105664
          },
          1: {
            lat: 49.248944,
            lng: -123.141178
          },
          2: {
            lat: 49.239836,
            lng: -123.124914
          },
          3: {
            lat: 49.249988,
            lng: -123.126631
          },
          4: {
            lat: 49.24976,
            lng: -123.094757
          },
          length: 5
        },
        "#list3": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.029757,
            //   lng: -122.799063
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            for (var i = 0; i < this.length; i++) {
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: (i + 1).toString(),
                  color: "white"
                },
                icon: list3((i + 1).toString()),
                zIndex: 100
              });
              var liValues = [];
              $("#list3 li h6").each(function() {
                liValues.push($(this).text());
              });
              makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            }
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.25452,
            lng: -123.114991
          },
          1: {
            lat: 49.239403,
            lng: -123.132797
          },
          2: {
            lat: 49.243029,
            lng: -123.106404
          },
          3: {
            lat: 49.24209,
            lng: -123.11382
          },
          length: 4
        },
        "#list4": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.029757,
            //   lng: -122.799063
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            for (var i = 0; i < this.length; i++) {
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: (i + 1).toString(),
                  color: "white"
                  // fontWeight: 'bold'
                },
                icon: list4((i + 1).toString()),
                zIndex: 100
              });
              var liValues = [];
              $("#list4 li h6").each(function() {
                liValues.push($(this).text());
              });
              makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            }
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.243888,
            lng: -123.10772
          },
          1: {
            lat: 49.240236,
            lng: -123.111723
          },
          2: {
            lat: 49.251984,
            lng: -123.122465
          },
          3: {
            lat: 49.242014,
            lng: -123.103592
          },
          length: 4
        },
        "#list5": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.029757,
            //   lng: -122.799063
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            for (var i = 0; i < this.length; i++) {
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: (i + 1).toString(),
                  color: "white"
                  // fontWeight: 'bold'
                },
                icon: list5((i + 1).toString()),
                zIndex: 100
              });
              var liValues = [];
              $("#list5 li h6").each(function() {
                liValues.push($(this).text());
              });
              makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            }
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.246282,
            lng: -123.100957
          },
          1: {
            lat: 49.255348,
            lng: -123.114968
          },
          2: {
            lat: 49.252385,
            lng: -123.127237
          },
          3: {
            lat: 49.251856,
            lng: -123.127301
          },
          4: {
            lat: 49.251087,
            lng: -123.127071
          },
          length: 5
        },
        "#list6": {
          resolve: function() {
            markerSet.hideAll();
            this.markerCollection.forEach(function(marker) {
              marker.setMap(map);
            });
            // map.panTo({
            //   lat: 49.029757,
            //   lng: -122.799063
            // });
            map.setZoom(14);
          },
          init: function() {
            var markerCollection = [];
            const transit = ["King Edward Station", "Oakridge 41st Station"];
            transit.forEach((el, i) => {
              console.log(el + " " + i);
              var marker = new google.maps.Marker({
                position: this[i],
                // title: i.toString(),
                label: {
                  text: el,
                  color: "#2793c3",
                  fontWeight: "bold",
                  fontSize: "16px"
                },
                icon: list6((i + 1).toString()),
                zIndex: 100
              });
              // var liValues = [];
              // $("#list6 li h6").each(function() {
              //   liValues.push($(this).text());
              // });
              // makeInfoWindowEvent(map, infoWindow, liValues[i], marker);
              markerCollection.push(marker);
              this[i]["marker"] = marker;
            });
            this.markerCollection = markerCollection;
          },
          0: {
            lat: 49.249208,
            lng: -123.115862
          },
          1: {
            lat: 49.233154,
            lng: -123.11665
          },
          length: 2
        },

        hideAll: function() {
          infoWindow.close();
          Object.keys(this).forEach(function(key) {
            //console.log(typeof markerSet[key]);
            if (typeof markerSet[key] == "object") {
              //var curSet = markerSet[key].markerCollection;
              markerSet[key].markerCollection.forEach(function(marker) {
                marker.setMap(null);
              });
              //curSet
            }
          });

          // console.log('reset')
        },
        showAll: function() {
          infoWindow.close();
          Object.keys(this).forEach(function(key) {
            //console.log(typeof markerSet[key]);
            if (typeof markerSet[key] == "object") {
              //var curSet = markerSet[key].markerCollection;
              markerSet[key].markerCollection.forEach(function(marker) {
                marker.setMap(map);
              });
              //curSet
            }
          });
          //map.panTo({lat:49.1247767, lng:-123.1631335});

          map.panTo({
            lat: 49.248881,
            lng: -123.107313
          });

          map.setZoom(15);
        },
        showCat: function(val) {
          // console.log(val)
          var bounds = new google.maps.LatLngBounds();

          // console.log(val.target.parentNode.parentNode);
          infoWindow.close();
          var key = "#" + val.target.parentNode.id;
          // var curSet = markerSet[key].markerCollection;
          markerSet[key].markerCollection.forEach(function(marker) {
            marker.setMap(map);
          });

          // console.log(markerSet[key])
          markerSet[key].markerCollection.forEach(element => {
            // console.log();
            bounds.extend(element.getPosition());
          });
          map.fitBounds(bounds);

          //curSet

          //map.panTo({lat:49.1247767, lng:-123.1631335});
          // map.setZoom(14);
        },
        init: function() {
          Object.keys(this).forEach(function(key) {
            //console.log(typeof markerSet[key]);
            if (typeof markerSet[key] == "object") {
              markerSet[key].init();
            }
          });
        }
      };

      markerSet.init();

      var bounds = new google.maps.LatLngBounds();

      var itteraterCallback = function(li, liIndex, selection) {
        var bounds = new google.maps.LatLngBounds();
        bounds.extend({
          lat: 49.248881,
          lng: -123.107313
        });
        // console.log(li.parentNode);
        li.className += " clickable";
        li.addEventListener("click", function(ev) {
          var parentSelector =
            "#" + li.parentNode.parentNode.parentNode.getAttribute("id");
          markerSet.hideAll();

          // console.log(parentSelector);
          var targetMarker = markerSet[parentSelector][liIndex].marker;
          targetMarker.setMap(map);
          if (parentSelector != "#list6") {
            infoWindow.setContent(ev.target.innerHTML);
            infoWindow.open(map, targetMarker);
          }

          // map.panTo(markerSet[parentSelector][liIndex]);
          /*					scrollPageTo("#map", {duration:250});*/

          bounds.extend(markerSet[parentSelector][liIndex]);

          map.fitBounds(bounds, 100);
          // map.panToBounds(bounds);
          // map.setZoom(map.getZoom() - 1);
          if (
            !map.getBounds().contains({
              lat: 49.148325,
              lng: -122.76049
            })
          ) {
            map.setZoom(map.getZoom() - 1);
          }
        });
      };

      var allcat = document.querySelectorAll(".cat");

      Array.prototype.forEach.call(allcat, function(el) {
        let selector = `#${el.getAttribute("id")} li`;
        Array.prototype.forEach.call(
          document.querySelectorAll(selector),
          itteraterCallback
        );
      });

      document.querySelectorAll("#map button").forEach(catfn);

      function catfn(e) {
        e.addEventListener("click", function(val) {
          markerSet.hideAll();
          // console.log(val)
          markerSet.showCat(val);
        });
      }

      new google.maps.Marker({
        position: {
          lat: 49.248881,
          lng: -123.107313
        },
        icon: {
          //   url: mainIcon,
          path: "M -2,-2 2,-2 2,2 -2,2 z",
          scale: 10,
          // url: "",
          // anchor: new google.maps.Point(25, 22.5),
          scaledSize: new google.maps.Size(100, 45)
        },
        clickable: false
      }).setMap(map);

      bounds.extend({
        lat: 49.148325,
        lng: -122.76049
      });

      function makeInfoWindowEvent(map, infowindow, contentString, marker) {
        google.maps.event.addListener(marker, "click", function() {
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        });
      }

      markerSet.showAll();
    }
  }
};
</script>

<style>
</style>