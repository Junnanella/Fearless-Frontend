import React from "react";

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      roomCount: "",
      city: "",
      states: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoomCountChange = this.handleRoomCountChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const url = "http://localhost:8000/api/states/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      this.setState({ states: data.states });
    }
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleRoomCountChange(event) {
    const value = event.target.value;
    this.setState({ roomCount: value });
  }

  handleCityChange(event) {
    const value = event.target.value;
    this.setState({ city: value });
  }

  handleStateChange(event) {
    const value = event.target.value;
    this.setState({ state: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.room_count = data.roomCount;
    delete data.roomCount;
    delete data.states;
    console.log(data);

    const locationUrl = "http://localhost:8000/api/locations/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newLocation = await response.json();
      console.log(newLocation);

      const cleared = {
        name: "",
        roomCount: "",
        city: "",
        state: "",
      };
      this.setState(cleared);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4 bg-white">
            <h1>Create a new location</h1>
            <form onSubmit={this.handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleNameChange}
                  placeholder="Name"
                  required
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleRoomCountChange}
                  placeholder="Room count"
                  required
                  type="number"
                  id="room_count"
                  className="form-control"
                  name="room_count"
                  value={this.state.roomCount}
                />
                <label htmlFor="room_count">Room count</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleCityChange}
                  placeholder="City"
                  required
                  type="text"
                  id="city"
                  className="form-control"
                  name="city"
                  value={this.state.city}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleStateChange}
                  required
                  name="state"
                  id="state"
                  className="form-select"
                  value={this.state.state}
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
