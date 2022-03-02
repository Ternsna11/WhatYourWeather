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
  base: "api.openweathermap.org/data/2.5/weather?lat=",
};
export default function ZipInput() {
  const [zip, setZip] = useState();
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [responseObj, setResponseObj] = useState({});
  const [error, setError] = useState(false);

  useEffect(async () => {
    if (zip) {
      // const dataZip = await fetchData();
      // console.log("dataZip: ", dataZip);
      await fetchWeather().then((res) => {
        setResponseObj(res);
        // console.log('res:', res);
      });
      // const dataLocation = await axios.get(
      //   `${location_api.base}=${location.lat},${location.lng}&key=${location_api.key}`
      // );
      // setResponseObj({ ...dataLocation });

      // return Promise.all([dataZip && dataLocation]);
    } else {
      setError(true);
    }
    //  const res = Promise.all([
    //     axios.get(`${location_api.base}=${location.lat},${location.lng}&key=${location_api.key}`).then(res => {
    //       setResponseObj((responseObj) => ({
    //         ...responseObj,
    //         location: responseObj.base,
    //       }))
    //       console.log("responseObj: ", responseObj)
    //     })
    //   ])

    //   const data = await Promise.all(Array.from(res).map(r => r.json()))
    //   console.log('flat: ', data.flat());
    // ]);
    // }
  }, [zip]);

  // const fetchData = async () => {
  const fetchData = () => {
    try {
      // const response = await axios.get(`${location_api.base}=${zip}&key=${location_api.key}`)
      const response = axios
        .get(`${location_api.base}=${zip}&key=${location_api.key}`)
        .then((response) => {
          setLocation(() => {
            const foo = response.data.results[0];
            console.log("foo: ", foo);
            return foo;
          });
          // return response;
        });
      // const weather = "foo";
    } catch (error) {
      setError(true);
    }
  };
  const fetchWeather = async () => {
    // const fetchWeather = () => {
    try {
      const { lat, lng } = location;
      await fetch(
        `${weather_api.base}${lat}&lon=${lng}&units=imperial&appid=${weather_api.key}`
      )
        // fetch(`${weather_api.base}${lat}&lon=${lng}&units=imperial&appid=${weather_api.key}`)
        .then((response) => {
          setResponseObj(response);
          console.log("responseObj ", responseObj.data);
          setError(false);
        });
    } catch (error) {
      setError(true);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await fetchData(zip).then((res) => {
      setLocation(res);
    });
    setZip(zip);
    // console.log("zip", zip);
  };

  return (
    <div className="input-group my-3 px-4" onSubmit={submitHandler}>
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
        // onKeyPress={fetchData}
        required
        // onChange={(event) => {
        //   const { value } = event.target;
        //   setZip(value.replace(/[^\d{5}]$/, "").substring(0, 5));
        // }}
      />

      {/* <p key={responseObj.id}> responseObj: {responseObj}\n</p> */}
    </div>
  );
}
