import "./App.css";
import ZipInput from "./zipInput/ZipInput";
import React from "react";

export default function App() {
  return (
    <div className="ml-3">
      <div className="App">Find your weather</div>
      <ZipInput />
    </div>
  );
}