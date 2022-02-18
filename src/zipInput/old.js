// import React, { useEffect, useState } from "react";
// const LOCATION_API_key = "AIzaSyBi6I_cyEBGjPYnKBnCpRvwj6SXx8iVBD8";
// const LOCATION_API = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${LOCATION_API_key}`;
// const WEATHER_API_key = "800a3f8dc7a089347269a3957e059ee1";
// const WEATHER_API = `api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${WEATHER_API_key}`;





// // const locationAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${LOCATION_API_key}`,

// // function App() {
// //   // const [query, setQuery] = useState("");
// //   // const [weather, setWeather] = useState({});
// //   // const [location, setLocation] = useState({ lat: "", lon: "" });
// //   // const [following, setFollowing] = useState([]);

// //   // useEffect(() => {
// //   //   if (location.lat && location.lon) {
// //   //     searchFollowing();
// //   //   }
// //   // }, [location]);



// //   // const search = (e) => {
// //   //   if (e.key === "Enter") {
// //   //     fetch(
// //   //       LOCATION_API
// //   //       // `${api.base}weather?q=${query}&units=imperial&appid=${api.key}&lang=tr`
// //   //     )
// //   //       .then((res) => res.json())
// //   //       .then((result) => {
// //   //         // setWeather(result);
// //   //         // setQuery("");
// //   //         setLocation(results.geometry.location);
// //   //         // console.log(setLocation((foo) => console.log(foo)));
// //   //       });
// //   //   }
// //   // };

// //   // const searchFollowing = () => {
// //   //   fetch(
// //   //     WEATHER_API
// //   //     // `${api.base}onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude=hourly,minutely&appid=${api.key}`
// //   //   )
// //   //     .then((res) => res.json())
// //   //     .then((result2) => {
// //   //       // console.log(following);
// //   //       setFollowing(array);
// //   //       // following == array
// //   //     });
// //   // };

// //   return (
// //     <div className="input-group ml-3">
// //       <form className="form-control pb-3" onSubmit={submitHandler}>
// //         <label
// //           htmlFor="zip"
// //           className="form-label m-4 "
// //           aria-placeholder="Enter a zip code: "
// //         >
// //           Enter a zip code:
// //           <input
// //             type="text"
// //             id="zip"
// //             className="form-control mt-2"
// //             placeholder="ex. 53149"
// //             // eslint-disable-next-line no-script-url
// //             aria-labelledby="zip"
// //             value={zip}
// //             maxLength={5}
// //             minLength={5}
// //             // onChange={handleChange}
// //             // onChange={(e) => setZip(e.target.value)}
// //             onChange={(event) => {
// //               const { value } = event.target;
// //               setZip(value.replace(/[^\d{5}]$/, "").substr(0, 5));
// //             }}
// //           />
// //         </label>
// //         <input
// //           className="btn btn-outline-primary"
// //           type="submit"
// //           // value="Submit"
// //         />
// //         {/* <button
// //           className="btn btn-outline-secondary mb-1"
// //           type="submit"
// //           id="button-addon2"
// //         >
// //           Submit
// //         </button> */}
// //         {/* <input className="btn btn-outline-primary" type="submit" value="Submit" /> */}
// //       </form>

// //       {/* <Weather responseObj={responseObj} error={error} loading={loading} /> */}
// //     </div>
// //   );
// // }
// // import React, { useState, useEffect } from "react";
// // import "./ZipInput.css";
// // import Weather from "./weather.js";
// export default function ZipInput() {
//   let [zip, setZip] = useState("");
//   let [responseObj, setResponseObj] = useState({});
//   let [error, setError] = useState(false);
//   let [loading, setLoading] = useState(false);

//   const LOCATION_API_key = "AIzaSyBi6I_cyEBGjPYnKBnCpRvwj6SXx8iVBD8";
//   const LOCATION_API = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${LOCATION_API_key}`
//   // const WEATHER_API_key = "800a3f8dc7a089347269a3957e059ee1";
//   // const WEATHER_API = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_key}`;

//   useEffect(() => {
//     const getCoordinates = async () => {
//       onst [location, setLocation] = useState({ lat: "", lon: "" });
//   const [following, setFollowing] = useState([]);

//   useEffect(() => {
//     if (location.lat && location.lon) {
//       searchFollowing();
//     }
//   }, [location]);



//   const search = (e) => {
//     if (e.key === "Enter") {
//       fetch(
//         LOCATION_API
//         // `${api.base}weather?q=${query}&units=imperial&appid=${api.key}&lang=tr`
//       )
//         .then((res) => res.json())
//         .then((result) => {
//           // setWeather(result);
//           // setQuery("");
//           setLocation(results.geometry.location);
//           // console.log(setLocation((foo) => console.log(foo)));
//         });
//     }
//   };

//   const searchFollowing = () => {
//     fetch(
//       WEATHER_API
//       // `${api.base}onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude=hourly,minutely&appid=${api.key}`
//     )
//       .then((res) => res.json())
//       .then((result2) => {
//         // console.log(following);
//         setFollowing(array);
//         // following == array
//       });
//   };

//       // event.preventDefault();
//       // if (zip.length === 0) return setError(true);
  
//       // Clear state in preparation for new data
//       setError(false);
//       setResponseObj({});
      
//       setLoading(true);
//       fetch(LOCATION_API)
//       .then((response) => response.json())
//       .then((data) => {
//         let foo = data.results[0].geometry.location;
//         console.log("zip: ", zip, foo);
//         setResponseObj([foo.lat, foo.lng, zip, data]);
//         // setResponseObj(data);
//         setLoading(false);
//         // const latitude = data.results.geometry.location.lat;
//         // const longitude = data.results.geometry.location.lng;
//         // setZipCode((zipcode, latitude, longitude));
//         // console.log({zipcode, latitude, longitude})
//       })
//       .catch(err => {
//         setError(true);
//         setLoading(false);
//         console.log(err.message);
//       });
//     }

//     getCoordinates();
//   }, [zip]);

//   // const handleChange = (event) => setZip(event.target.value);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setZip((zip) => [...zip, event.target.value]);
//     console.log("zip", zip);
//   };

//   return (
//     <div className="input-group ml-3">
//       <form className="form-control pb-3" onSubmit={submitHandler}>
//         <label
//           htmlFor="zip"
//           className="form-label m-4 "
//           aria-placeholder="Enter a zip code: "
//         >
//           Enter a zip code:
//           <input
//             type="text"
//             id="zip"
//             className="form-control mt-2"
//             placeholder="ex. 53149"
//             // eslint-disable-next-line no-script-url
//             aria-labelledby="zip"
//             value={zip}
//             maxLength={5}
//             minLength={5}
//             // onChange={handleChange}
//             // onChange={(e) => setZip(e.target.value)}
//             onChange={(event) => {
//               const { value } = event.target;
//               setZip(value.replace(/[^\d{5}]$/, "").substr(0, 5));
//             }}
//           />
//         </label>
//         <input className="btn btn-outline-primary" type="submit" value="Submit" />
//         {/* <button
//           className="btn btn-outline-secondary mb-1"
//           type="submit"
//           id="button-addon2"
//         >
//           Submit
//         </button> */}
//         {/* <input className="btn btn-outline-primary" type="submit" value="Submit" /> */}
//       </form>

//       {/* <Weather responseObj={responseObj} error={error} loading={loading} /> */}
//     </div>
//   );
// }