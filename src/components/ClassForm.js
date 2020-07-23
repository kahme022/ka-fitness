import React, { Component } from "react";


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


class ClassForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            mId: null,
            formErrors: {
                firstName: "",
                lastName: "",
                mId: "",
            }
        };
    }

    onChange = time => this.setState({ time })

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            alert("You have successfully registered for the class, and will be contacted you shortly!")
            console.log("Success!");
        } else {
            alert("Your registration is invalid, please try again")
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
            case "mId":
                formErrors.mId =
                    value.length > 6  ? "must be 6 characters exactly":
                    value.length < 6  ? "must be 6 characters exactly" 
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
            <div className="form-class">
                <div className="form-cbanner">

                    <h1>Class Registration</h1>
                    <p>Fill out form to join gym class</p>
                    <br/>

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

                        <div className="mId">
                            <label htmlFor="mId">Membership Id</label>
                            <input
                                className={formErrors.mId.length > 0 ? "error" : null}
                                placeholder="XXX-XXX"
                                type='password'
                                name="mId"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.mId.length > 0 && (
                                <span className="errorMessage">{formErrors.mId}</span>
                            )}
                        </div>

                        <div className="booking">
                            <label> Type of Class: </label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="none">Select...</option>
                                <option value="cycling">Cycling</option>
                                <option value="boxing">Boxing</option>
                                <option value="yoga">Yoga</option>
                                <option value="pilates">Pilates</option>
                            </select>
                        </div>

                        <div className="confirmBooking">
                            <button type="submit">Register</button>
                        </div>

                    </form>
                </div>
            </div>
        );

    }
}

export default ClassForm;
