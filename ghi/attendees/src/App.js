import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div>
      <table>
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
  );
}

export default App;
