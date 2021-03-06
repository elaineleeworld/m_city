import React, { Component } from "react";
import FormFields from "../ui/FormFields";
import { validate } from "../ui/misc";
import { firebase } from "../../firebase";

export default class LogIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };
  updateForm(element) {
    // console.log("element", element);
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.event.target.value;
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    // console.log(newFormData);

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData
    });
  }

  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log(dataToSubmit);
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          console.log("user is authenticated");
          this.props.history.push("/dashboard");
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>

            <FormFields id={"email"} formdata={this.state.formData.email} change={element => this.updateForm(element)} />
            <FormFields id={"password"} formdata={this.state.formData.password} change={element => this.updateForm(element)} />
            {this.state.formError ? <div className="error_label">Something is wrong, try again.</div> : null}

            <button onClick={event => this.submitForm(event)}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}
