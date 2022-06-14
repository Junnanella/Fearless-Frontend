import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import React from "react";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendConferenceForm from "./AttendConferenceForm";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />
      <div className="container">
        <ConferenceForm />
        <LocationForm />
        <AttendeesList attendees={props.attendees} />
        <AttendConferenceForm />
      </div>
    </>
  );
}

export default App;
