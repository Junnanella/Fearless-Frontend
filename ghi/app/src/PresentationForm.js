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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
  }

  //   handlers
  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeEmail(event) {
    const value = event.target.value;
    this.setState({ presenter_email: value });
  }

  handleChangeCompany(event) {
    const value = event.target.value;
    this.setState({ company_name: value });
  }

  handleChangeTitle(event) {
    const value = event.target.value;
    this.setState({ title: value });
  }

  handleChangeSynopsis(event) {
    const value = event.target.value;
    this.setState({ synopsis: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.conferences;

    const presentationUrl = "http://localhost:8000/api/conferences/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(presentationUrl, fetchConfig);
    if (response.ok) {
      this.setState({
        presenter_name: "",
        presenter_email: "",
        company_name: "",
        title: "",
        synopsis: "",
        conference: "",
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new presentation</h1>
            <form onSubmit={this.handleSubmit} id="create-presentation-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeName}
                  placeholder="Presenter name"
                  required
                  type="text"
                  name="presenter_name"
                  id="presenter_name"
                  className="form-control"
                />
                <label htmlFor="presenter_name">Presenter name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeEmail}
                  placeholder="Presenter email"
                  required
                  type="email"
                  name="presenter_email"
                  id="presenter_email"
                  className="form-control"
                />
                <label htmlFor="presenter_email">Presenter email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeCompany}
                  placeholder="Company name"
                  type="text"
                  name="company_name"
                  id="company_name"
                  className="form-control"
                />
                <label htmlFor="company_name">Company name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeTitle}
                  placeholder="Title"
                  required
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="mb-3">
                <label htmlFor="synopsis">Synopsis</label>
                <textarea
                  onChange={this.handleChangeSynopsis}
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
                  <option value="">Choose a conference</option>
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
