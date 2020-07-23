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
            password: null,
            mId: null,
            time: '10:00',
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                mId: ""
            }
        };
    }


    onChange = time => this.setState({ time })

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            alert("Your booking is successful we will send a confirmation email soon!")
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
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "mId":
                formErrors.mId =
                    value.length > 6 ? "must be 6 characters exactly" :
                        value.length < 6 ? "must be 6 characters exactly"
                            : "";
                break;
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };



    render() {

        const { formErrors } = this.state;

        return (
            <div className="form-container">
                <div className="form-banner">
                    <h1>Make a Booking</h1>
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

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>

                        <div className="mId">
                            <label htmlFor="mId">Membership Id</label>
                            <input
                                className={formErrors.mId.length > 0 ? "error" : null}
                                placeholder="XXX-XXX"
                                type='text'
                                name="mId"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.mId.length > 0 && (
                                <span className="errorMessage">{formErrors.mId}</span>
                            )}
                        </div>

                        <div className="booking">
                            <label> Type of booking: </label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="none">Select...</option>
                                <option value="personal training">Personal Training</option>
                                <option value="gym rental">Gym Rental</option>
                            </select>
                        </div>

                        <div className="date-time">

                        </div>

                        <div className="confirmBooking">
                            <button type="submit">Confirm Booking</button>
                        </div>

                    </form>
                </div>
            </div>
        );

    }
}

export default Book;
