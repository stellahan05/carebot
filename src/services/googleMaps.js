export const getNearbyHospitals = (lat, lng) => {
    return new Promise((resolve, reject) => {
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));
      service.nearbySearch(
        {
          location: { lat, lng },
          radius: 5000,
          type: ["hospital"],
        },
        (results, status) => {
          if (status === "OK") {
            resolve(results);
          } else {
            reject(status);
          }
        }
      );
    });
  };
  