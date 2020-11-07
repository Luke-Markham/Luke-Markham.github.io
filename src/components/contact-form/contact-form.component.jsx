import React from "react";
import axios from "axios";
import { Breakpoint } from "react-socks";
import Fade from "react-reveal";
import "./contact-form.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import Textarea from "../../components/textarea/textarea.component";
import FormBtn from "../../components/form-btn/form-btn.component";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleForm = e => {
    axios
      .post("https://formcarry.com/s/JcjZozOdygu", this.state, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        alert("Great, I have recieved your message! I be in contact soon.");
      })
      .catch(function(error) {
        alert("Sorry there was a problem, please try again. ");
      });

    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleForm}>
        <Fade left>
          <FormInput
            type="text"
            value={name}
            name="name"
            label="Name"
            onChange={this.handleFields}
            required
          />
        </Fade>
        <Fade right>
          <FormInput
            type="email"
            value={email}
            name="email"
            label="Email"
            onChange={this.handleFields}
            required
          />
        </Fade>
        <Breakpoint large up>
          <Fade left>
            <Textarea message={message} handleFields={this.handleFields} />
          </Fade>
          <Fade right>
            <FormBtn />
          </Fade>
        </Breakpoint>
        <Breakpoint medium down>
          <Textarea message={message} handleFields={this.handleFields} />
          <FormBtn />
        </Breakpoint>
      </form>
    );
  }
}

export default ContactForm;
