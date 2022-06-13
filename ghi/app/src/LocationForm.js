import React from "react";

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { states: [] };
  }

  async componentDidMount() {
    const url = "http://localhost:8000/api/states/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      this.setState({ states: data.states });
    }
  }
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4 bg-white">
            <h1>Create a new location</h1>
            <form id="create-location-form">
              <div className="form-floating mb-3">
                <input
                  placeholder="Name"
                  required
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  placeholder="Room count"
                  required
                  type="number"
                  id="room_count"
                  className="form-control"
                  name="room_count"
                />
                <label htmlFor="room_count">Room count</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  placeholder="City"
                  required
                  type="text"
                  id="city"
                  className="form-control"
                  name="city"
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="mb-3">
                <select
                  required
                  name="state"
                  id="state"
                  className="form-select"
                >
                  <option value="">Choose a state</option>
                  {this.state.states.map((state) => {
                    return (
                      <option
                        key={state.abbreviation}
                        value={state.abbreviation}
                      >
                        {state.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationForm;
