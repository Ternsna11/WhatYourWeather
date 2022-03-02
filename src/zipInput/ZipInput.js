import React, { useEffect, useState } from "react";
const axios = require("axios");
const location_api = {
  // key: `${process.env.REACT_APP_API_KEY}`,
  key: "AIzaSyBi6I_cyEBGjPYnKBnCpRvwj6SXx8iVBD8",
  base: "https://maps.googleapis.com/maps/api/geocode/json?address",
};

const weather_api = {
  // key: `${process.env.REACT_APP_API_KEY}`,
  key: "800a3f8dc7a089347269a3957e059ee1",
  base: "api.openweathermap.org/data/2.5/weather?",
};
export default function ZipInput() {
  const [zip, setZip] = useState();
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [responseObj, setResponseObj] = useState({});
  const [error, setError] = useState(false);

  

  // const fetchData = () => {
  const fetchData = async () => {
    try {
      // const response = await axios.get(`${location_api.base}=${zip}&key=${location_api.key}`)
      // eslint-disable-next-line
      const response = await axios.get(`${location_api.base}=${zip}&key=${location_api.key}`)
      // .then((response) => setLocation(response));
      console.log("response line 51: ", response.data.results[0]);
      setLocation(response.data.results[0]);
      return response.data.results[0];
        // {
        //   setLocation(() => {
        //     const foo = response.data.results[0];
        //     console.log("foo: ", foo);
        //     return foo;
        //   });
          // return response;
        // });
      // const weather = "foo";
    } catch (error) {
      setError(true);
    }
  };
  // const fetchWeather = async () => {
  //   // const fetchWeather = () => {
  //   try {
  //     const { lat, lng } = location;
  //     return await fetch(
  //       `${weather_api.base}${lat}&lon=${lng}&units=imperial&appid=${weather_api.key}`
  //     )
  //       // fetch(`${weather_api.base}${lat}&lon=${lng}&units=imperial&appid=${weather_api.key}`)
  //       .then((response) => {
  //         setResponseObj(response);
  //         console.log("responseObj ", responseObj.data);
  //         setError(false);
  //       });
  //   } catch (error) {
  //     setError(true);
  //   }
  // };
  

  const submitHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await fetchData(zip)
    .then((res) => {
      console.log("res line 90: ", res);
      setLocation(res);
    });
    setZip(zip);
    // console.log("zip", zip);
  };

  useEffect(() => {
    // eslint-disable-next-line
    // if (location.lat && location.lng) {
    const fetchWeather = async () => {
      try {
        const { geometry: { location: {lat, lng}} } = location;
        console.log("lat 80: ", lat);
        console.log("lng 81: ", lng);
        if (lat && lng) {
          const response = await axios.get(
            `${weather_api.base}lat=${lat}&lon=${lng}&units=imperial&appid=${weather_api.key}`
          )
          // .then((response) => setResponseObj(response.data));
          console.log("response line 90: ", response);
          setResponseObj(response.data);
          console.log("responseObj line 92: ", responseObj);
          return response;
        };
      } catch (error) {
        console.log("error line 96: ", error.message);
        setError(true);
      }
    }
    fetchWeather();
    // eslint-disable-next-line
  }, [location]);

  return (
    <div>
      {/* <p className={`alert alert-${message.variant}`}>{message.text}</p> */}
      <form  className="input-group my-3 px-4" onSubmit={submitHandler}>
      <label
        htmlFor="zip"
        className="form-label m-4 "
        aria-placeholder="Enter a zip code: "
      >
      <input
        type="number"
        id="zip"
        className="form-control mt-2"
        placeholder="ex. 53149"
        // eslint-disable-next-line no-script-url
        aria-labelledby="zip"
        value={zip || ""}
        maxLength="5"
        onChange={(e) => setZip(e.target.value)}
        required
      />
      </label>
      <input className="btn btn-outline-primary" type="submit" value="Submit" />

      {/* <p key={responseObj.id}> responseObj: {responseObj}\n</p> */}
    </form>
    </div>
    
  );
}
