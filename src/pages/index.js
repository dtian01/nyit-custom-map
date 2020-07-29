
import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  useEffect(() => {

    const mapboxgl = window.mapboxgl;
    const MapboxGeocoder = window.MapboxGeocoder;

    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2lsbGFoYjMwOCIsImEiOiJja2N0OXBodnYxZWJtMnFtMWgyd2s0N3IyIn0.9OkpMRpB46NefsfttnkYLA";

    // icon stuff

    var places = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description: "Rockefeller Building",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/maps3.png?alt=media&token=bea1b1f2-5546-47e2-88f2-1bea5cdce596"
          },
          geometry: {
            type: "Point",
            coordinates: [-73.6062, 40.8103]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "Serota Building",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/maps1.png?alt=media&token=d31a95b0-271d-4790-931a-23d15ce02ed4"
          },
          geometry: {
            type: "Point",
            coordinates: [-73.6055, 40.8104]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "Riland Building",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/maps2.png?alt=media&token=6fd9dc81-689a-403a-9055-e1570bf5eec7"
          },
          geometry: {
            type: "Point",
            coordinates: [-73.6056, 40.8095]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "Parking Lot",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/maps4.png?alt=media&token=35171e8e-ffea-4235-9925-7f7bf2ff7fa6"
          },
          geometry: {
            type: "Point",
            coordinates: [-73.6042, 40.8092]
          }
        }
      ]
    };

    // polygon stuff

    var nyit = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "NYITCOM"
          },
          geometry: {
            coordinates: [
              [
                [-73.605893, 40.809516],
                [-73.605806, 40.809582],
                [-73.605745, 40.809534],
                [-73.605501, 40.809712],
                [-73.60526, 40.809524],
                [-73.605504, 40.809347],
                [-73.605447, 40.809297],
                [-73.605534, 40.809236],
                [-73.605583, 40.809267],
                [-73.605748, 40.809152],
                [-73.605998, 40.809348],
                [-73.605836, 40.809474],
                [-73.605893, 40.809516]
              ]
            ],
            type: "Polygon"
          }
        },
        {
          type: "Feature",
          properties: {
            name: "NYITCOM Rockefeller Hall"
          },
          geometry: {
            coordinates: [
              [
                [-73.606228, 40.810497],
                [-73.606365, 40.810395],
                [-73.606408, 40.810427],
                [-73.606463, 40.810387],
                [-73.606421, 40.810352],
                [-73.606482, 40.810307],
                [-73.606229, 40.810111],
                [-73.605974, 40.810298],
                [-73.606228, 40.810497]
              ]
            ],
            type: "Polygon"
          }
        },
        {
          type: "Feature",
          properties: {
            name: "NYITCOM Serota Academic Center"
          },
          geometry: {
            coordinates: [
              [
                [-73.605522, 40.810588],
                [-73.605222, 40.810353],
                [-73.605506, 40.810139],
                [-73.605575, 40.810192],
                [-73.605608, 40.810172],
                [-73.605839, 40.810351],
                [-73.605522, 40.810588]
              ]
            ],
            type: "Polygon"
          }
        },
        {
          type: "Feature",
          properties: {
            name: "NYITCOM parking area"
          },
          geometry: {
            coordinates: [
              [
                [-73.605709, 40.808674],
                [-73.603733, 40.810608],
                [-73.60275, 40.810044],
                [-73.603662, 40.809116],
                [-73.603015, 40.808718],
                [-73.603397, 40.808327],
                [-73.604084, 40.808724],
                [-73.604809, 40.808073],
                [-73.605709, 40.808674]
              ]
            ],
            type: "Polygon"
          }
        }
      ]
    };

    // map configuration

    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/killahb308/ckd70iyp60h711is3cv0usbul",
      center: [-73.6045, 40.8095],
      zoom: 17
    });

    map.on("load", function () {
      // Add a GeoJSON source containing place coordinates and information.
      map.addSource("places", {
        type: "geojson",
        data: places
      });

      map.addLayer({
        id: "poi-labels",
        type: "symbol",
        source: "places",
        layout: {
          "text-field": ["get", "description"],
          "text-variable-anchor": ["top", "left"],
          "text-radial-offset": 2.2,
          "text-justify": "auto"
        }
      });

      map.addSource("nyit", {
        type: "geojson",
        data: nyit
      });

      map.addLayer({
        id: "nyitcom",
        type: "fill",
        source: "nyit",
        layout: {},
        paint: {
          "fill-color": "#f2a900",
          "fill-opacity": 0.2
        }
      });

      places.features.forEach((marker, i) => {
        var popup = new mapboxgl.Popup({
          offset: 30,
          className: "hey",
          closeButton: false,
          closeOnClick: true
        }).setHTML(`
      <div class="max-w-sm rounded overflow-hidden">
        <img class="w-full" src="https://images.unsplash.com/photo-1547190994-0dfe4ab1bdae" alt="Sunset in the mountains">
        <div class="py-4">
          <div class="font-bold text-lg mb-2">NYITCOM's ${marker.properties.description}</div>
          <p class="text-gray-700 text-sm">
            <a class="text-blue-500" target=”_blank” href="https://dtian01.github.io/nyit-360-tour/">View a 360 Tour</a>
          </p>
        </div>
      </div>
    `);
        var el = document.createElement("div");
        el.innerHTML = `<div><img width="50px" height="50px" src=${marker.properties.imageUrl} /></div>`;
        const { coordinates } = marker.geometry;
        el.addEventListener("click", () => {
          map.flyTo({
            center: coordinates,
            zoom: 19
          });
          const markerIcon = el.querySelector("div");
          markerIcon.style.transform = "scale(1)";
        });
        el.addEventListener("mouseenter", () => {
          const markerIcon = el.querySelector("div");
          markerIcon.style.transform = "scale(1.5)";
        });
        el.addEventListener("mouseleave", () => {
          const markerIcon = el.querySelector("div");
          markerIcon.style.transform = "scale(1)";
        });
        el.classList = `marker`;
        var marker = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(map);
      });

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
      map.addControl(geocoder, 'top-left');
      map.rotateTo(200, { duration: 50000 });

      map.addControl(new mapboxgl.NavigationControl);
    });

  }, [])

  return (
    <Layout>
      <div id="map"></div>
    </Layout>
  )
}

export default IndexPage