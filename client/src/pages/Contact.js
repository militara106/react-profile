import React from "react";
import axios from "axios";
import BorderContainer from "../components/BorderContainer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  //   Form Submission
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  //   Form Reset
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  //   Form Value Change Handlers
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <BorderContainer>
        {/* Form Start */}
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              id="email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>

        {/* Test Box */}
        <div>
          Name: {this.state.name}
          <br/>
          Email: {this.state.email}
          <br/>
          Message: {this.state.message}
        </div>
        
      </BorderContainer>
    );
  }
}

export default Contact;
