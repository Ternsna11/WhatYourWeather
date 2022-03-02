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
  base: "https://api.openweathermap.org/data/2.5/weather?",
};
export default function ZipInput() {
  // state variables
  const [zip, setZip] = useState();
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [responseObj, setResponseObj] = useState({});
  const [error, setError] = useState(false);
  const [message, setMessage] = useState({});
  const [latitude, setLatitude] = useState(-33.7560119);
  const [longitude, setLongitude] = useState(150.6038367);

  useEffect(() => latitude && longitude && axios.get(
            `${weather_api.base}lat=${latitude}&lon=${longitude}&units=imperial&appid=${weather_api.key}`
          )
          .then((res) => {
            setResponseObj(res.data)
            console.log("res.data line 33: ", res.data)
            setMessage(res.data.weather[0].description);
            return res.data;
          })
          .catch(error => setError(error))
, [latitude, longitude]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${location_api.base}=${zip}&key=${location_api.key}`);
      console.log("data: ", data);
      // fetches data from our api
      setZip(zip);
      setLocation(data);
      setLatitude(data.results[0].geometry.location.lat)
      setLongitude(data.results[0].geometry.location.lng)
      setMessage({ text: 'Loading..', variant: 'info' });
      setResponseObj(data);

      return data;
      
    } catch(error){
      console.log("error: ", error.message);
      setError(true);
      setMessage({text: 'Something went wrong..', variant: 'danger', error: error.message})
    };
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMessage({text: 'Loading..', variant: 'info'})
    fetchData()
    .catch(() => setMessage({text: 'Something went wrong..', variant: 'danger', error: error.message}))
  };

  const { main, name } = responseObj;

  return (
    <div>
      <p className={`alert alert-${message.variant}`}>{message.text}</p>
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
        aria-labelledby="zip"
        value={zip || ""}
        maxLength="5"
        onChange={(e) => setZip(e.target.value)}
        required
      />
      </label>
      <input className="btn btn-outline-primary" type="submit" value="Submit" />
    </form>

    <div className="card m-4">
      <div className="card-body">
        <h5 className="card-title">{responseObj.name}</h5>
      {name}
      
        <p className="card-text" key={responseObj}>
          <span className="font-weight-bold">information: </span>
          {JSON.stringify(responseObj)}
        </p>
        </div>
      </div>
    </div>
  );
}