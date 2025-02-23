import React, { useState } from "react";
import Chatbot from "./components/chatbot";
import HospitalMap from "./components/hospitalMap";
import Auth from "./components/auth";
import { getSymptomAdvice } from "./services/openai";
import { getNearbyHospitals } from "./services/googleMaps";

const App = () => {
  const [user, setUser] = useState(null);
  const [symptoms, setSymptoms] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState(null);

  const handleLogin = () => {
    setUser(true);
  };

  const handleSymptomSubmit = async (symptoms) => {
    setSymptoms(symptoms);
    const advice = await getSymptomAdvice(symptoms);
    console.log("Advice:", advice);

    // For simplicity, assume we're using a fixed location here for testing:
    const location = { lat: 40.730610, lng: -73.935242 }; // New York City
    setHospitalLocation(location);

    const hospitals = await getNearbyHospitals(location.lat, location.lng);
    console.log("Nearby Hospitals:", hospitals);
  };

  return (
    <div>
      {!user ? (
        <Auth onLogin={handleLogin} />
      ) : (
        <>
          <Chatbot onSubmit={handleSymptomSubmit} />
          {hospitalLocation && <HospitalMap location={hospitalLocation} />}
        </>
      )}
    </div>
  );
};

export default App;
