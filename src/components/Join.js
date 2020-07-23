import React, { Component } from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};



class Book extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }
    };
  }

  onChange = time => this.setState({ time })

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      alert("We have successfully received you application, and will contact to you shortly !")
      console.log("Success!");
    } else {
      alert("Your booking is invalid, please try again")
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "phone":
        formErrors.phone =
          value.length > 9 ? "must be 9 characters exactly" :
            value.length < 9 ? "must be 9 characters exactly"
              : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {

    const { formErrors } = this.state;

    return (
      <div className="join-page">
        <div className="join-banner">
          <h1>Join KA Fitness</h1>

          <h4>Step 1: Select a Plan</h4>

          <div className="booking">
            <label> Type of Plans: </label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none">Select...</option>
              <option value="black">Black Membership - $120/year</option>
              <option value="gold">Gold Membership - $240/year</option>
              <option value="platinum">Platinum Membership - $360/year</option>
            </select>
          </div>


          <h4>Step 2: Fill out your Personal Information</h4>

          <form onSubmit={this.handleSubmit} noValidate>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="XXX-XXX-XXXX"
                type="password"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>

            <div className="confirmBooking">
              <button type="submit">Submit</button>
            </div>

          </form>
        </div>
      </div>
    );

  }
}

export default Book;
