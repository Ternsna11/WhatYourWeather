

// useEffect(async () => {
  //   console.log("location ", location);
  //   if (location) {
  // await fetchWeather();
  // console.log("location ", location);
  // const data = await fetchWeather();
  // const data = await axios.get(`${location_api.base}=${location.lat},${location.lng}&key=${location_api.key}`)
  // console.log("data: ", data);
  // setResponseObj((responseObj) => ({
  //   ...responseObj,
  //   location: data.data.results
  // }))
  // console.log("responseObj: ", responseObj)
  // return data;
  // await fetchWeather().then((res) => {
  //   setResponseObj(res);
  // });
  //   }
  // }, [responseObj])


// import React, { useEffect, useState } from "react";

// const location_api = {
//   // key: `${process.env.REACT_APP_API_KEY}`,
//   key: "AIzaSyBi6I_cyEBGjPYnKBnCpRvwj6SXx8iVBD8",
//   base: "https://maps.googleapis.com/maps/api/geocode/json?address",
// };

// const weather_api = {
//   // key: `${process.env.REACT_APP_API_KEY}`,
//   key: "800a3f8dc7a089347269a3957e059ee1",
//   base: "api.openweathermap.org/data/2.5/weather?lat=",
// };
// export default function ZipInput() {
//   const [zip, setZip] = useState();
//   const [location, setLocation] = useState({ lat: "", lng: "" });
//   const [responseObj, setResponseObj] = useState({});

//   const fetchData = async () => {
//     try {
//       console.log("zip line 21: ", zip);
//       // parseInt(zip)
//       const response = await fetch(
//         `${location_api.base}=${zip}&key=${location_api.key}`
//       );
//       const json = await response.json();
//       console.log("json line 55: ", json.results);

//       // let geometry = json.results[0].geometry.location;
//       let geometry = json.results;
//       console.log("geometry line 28: ", geometry);
//       setLocation(geometry);

//       const weatherResponse = await fetch(
//         `${weather_api.base}${geometry.lat}&lon=${geometry.lng}&units=imperial&appid=${weather_api.key}`
//       ).then(async (response) => {
//         try {
//           await setResponseObj(response);
//           console.log("responseObj line 82: ", responseObj);

//           const weatherJson = await response.text();
//           JSON.parse(JSON.stringify(weatherJson['weather'[0]]))
//           console.log("weatherJson line 86: ", weatherJson);
//           // let foo = JSON.parse(weatherJson)
//           // console.log("foo line 78: ", foo);
//         } catch (error) {
//           console.log("Error happened here!");
//           console.error(error.message);
//         }
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [zip]);

//   // useEffect(()=>{
//   //   searchFollowing();
//   //   // if(location.lat && location.lon){
//   //   // if(zip){
//   //   //   searchFollowing();
//   //   // }
//   // // }, [location])
//   // }, [zip])

//   // const search = async (e) => {
//   //   e.preventDefault();
//   //   setZip(e.target.value);
//   //   zip.split("").join("");
//   //   console.log("zip: ", zip);
//   //   if (e.key === 'Enter') {
//   //     fetch(`${location_api.base}=${zip}&key=${location_api.key}`)
//   //     .then(res => res.json())
//   //     .then(result => {
//   //       // setLocation(geometry);
//   //       // setQuery('');
//   //       setLocation(result.coord);
//   //     })
//   //   }
//   // }

//   // const searchFollowing = async () => {
//   //   const { lat, lon } = location;
//   //   fetch(`${weather_api.base}${lat}&lon=${lon}&units=imperial&appid=${weather_api.key}`)
//   //   .then(res => res.json())
//   //   .then(result2 => {
//   //     setResponseObj(result2);
//   //       console.log("responseObj: ", responseObj);
//   //     //  setFollowing(array);
//   //   })
//   // }

//   const submitHandler = (event) => {
//     event.preventDefault();
//     // event.stopPropagation();
//     setZip(zip);
//     // console.log("zip", zip);
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
//             type="number"
//             id="zip"
//             className="form-control mt-2"
//             placeholder="ex. 53149"
//             // eslint-disable-next-line no-script-url
//             aria-labelledby="zip"
//             value={zip}
//             maxLength="5"
//             onChange={(e) => setZip(e.target.value)}
//             // onKeyPress={search}
//             required
//             // onChange={(event) => {
//             //   const { value } = event.target;
//             //   setZip(value.replace(/[^\d{5}]$/, "").substring(0, 5));
//             // }}
//           />
//         </label>
//         <input
//           className="btn btn-outline-primary"
//           type="submit"
//           value="Submit"
//         />
//       </form>

//       {/* <p key={responseObj.id}> responseObj: {responseObj}\n</p> */}
//     </div>
//   );
// }






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


// useEffect( () => {
//   const { lat, lng } = location;
//   if (location) {
//     fetchWeather();
//     // const dataZip = await fetchData();
//     // console.log("dataZip: ", dataZip);
//     // await fetchWeather().then((res) => {
//     //   setResponseObj(res);
//     //   // console.log('res:', res);
//     // });
//     // const dataLocation = await axios.get(
//     //   `${location_api.base}=${location.lat},${location.lng}&key=${location_api.key}`
//     // );
//     // setResponseObj({ ...dataLocation });

//     // return Promise.all([dataZip && dataLocation]);
//   } else {
//     setError(true);
//   }

// }, [zip]);



  

  // const fetchData = () => {
  // const fetchData = async () => {
  //   try {
  //     // const response = await axios.get(`${location_api.base}=${zip}&key=${location_api.key}`)
  //     // eslint-disable-next-line
  //     const response = await axios.get(`${location_api.base}=${zip}&key=${location_api.key}`)
  //     // .then((response) => setLocation(response));
  //     console.log("response line 51: ", response.data.results[0]);
  //     setLocation(response.data.results[0]);
  //     return response.data.results[0];
  //       // {
  //       //   setLocation(() => {
  //       //     const foo = response.data.results[0];
  //       //     console.log("foo: ", foo);
  //       //     return foo;
  //       //   });
  //         // return response;
  //       // });
  //     // const weather = "foo";
  //   } catch (error) {
  //     setError(true);
  //   }
  // };
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

  

// const submitHandler = (event) => {
//   event.preventDefault();
//   event.stopPropagation();
//   setMessage({text: 'Loading..', variant: 'info'})
//   fetchData(zip)
//   .then((res) => {
//     console.log("res line 90: ", res);
//     setLocation(res);
//   });
//   setZip(zip);
//   // console.log("zip", zip);
// };

// useEffect(() => {
//   const fetchWeather = () => {
//     try {
//       const { geometry: { location: {lat, lng}} } = location;
//       console.log("lat 60: ", lat);
//       console.log("lng 61: ", lng);
//       console.log("latitude 62: ", latitude);
//       console.log("longitude 63: ", longitude);

//       fetch(`${weather_api.base}${lat}&lon=${lng}&units=imperial&appid=${weather_api.key}`)
//       .then(response => response.json())
//       .then(response => {
//         console.log("response: ", response);
//         setResponseObj(response);
//         setError(false);
//       })
//       // if (lat && lng) {
//       //   const response = axios.get(
//       //     `${weather_api.base}lat=${latitude}&lon=${longitude}&units=imperial&appid=${weather_api.key}`
//       //   )
//       //   // .then((response) => setResponseObj(response.data));
//       //   console.log("response line 90: ", response);
//       //   setResponseObj(response.data);
//       //   console.log("responseObj line 92: ", responseObj);
//       //   return response;
//       // };
//     } catch (error) {
//       console.log("error line 96: ", error.message);
//       setError(true);
//     }
//   }
//   fetchWeather();
// }, [latitude, longitude]);