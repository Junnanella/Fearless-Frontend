import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import React from "react";
import AttendeesList from "./AttendeesList";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />
      <div className="container">
        <AttendeesList attendees={props.attendees} />
      </div>
    </>
  );
}

export default App;
