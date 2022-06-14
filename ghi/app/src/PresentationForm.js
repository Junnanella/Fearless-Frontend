import React from "react";

class PresentationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presenter_name: "",
      presenter_email: "",
      company_name: "",
      title: "",
      synopsis: "",
      conference: "",
      conferences: [],
    };

    // binding
  }

  //   handlers

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new presentation</h1>
            <form id="create-presentation-form">
              <div className="form-floating mb-3">
                <input
                  placeholder="Presenter name"
                  required
                  type="text"
                  name="presenter_name"
                  id="presenter_name"
                  className="form-control"
                />
                <label for="presenter_name">Presenter name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  placeholder="Presenter email"
                  required
                  type="email"
                  name="presenter_email"
                  id="presenter_email"
                  className="form-control"
                />
                <label for="presenter_email">Presenter email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  placeholder="Company name"
                  type="text"
                  name="company_name"
                  id="company_name"
                  className="form-control"
                />
                <label for="company_name">Company name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  placeholder="Title"
                  required
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                />
                <label for="title">Title</label>
              </div>
              <div className="mb-3">
                <label for="synopsis">Synopsis</label>
                <textarea
                  className="form-control"
                  id="synopsis"
                  rows="3"
                  name="synopsis"
                ></textarea>
              </div>
              <div className="mb-3">
                <select
                  required
                  name="conference"
                  id="conference"
                  className="form-select"
                >
                  <option selected value="">
                    Choose a conference
                  </option>
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

export default PresentationForm;
