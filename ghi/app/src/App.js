import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import React from "react";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Conference</th>
            </tr>
          </thead>
          <tbody>
            {props.attendees.map((attendee) => {
              return (
                <tr key={attendee.href}>
                  <th>{attendee.name}</th>
                  <th>{attendee.conference}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default App;
