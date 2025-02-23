import React, { useEffect } from "react";

const HospitalMap = ({ location }) => {
  useEffect(() => {
    if (location) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: location,
          zoom: 14,
        });

        new window.google.maps.Marker({
          position: location,
          map: map,
          title: "You are here",
        });
      };
    }
  }, [location]);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default HospitalMap;
