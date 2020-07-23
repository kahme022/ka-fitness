import React from "react";


function Contact() {
    return (

        <section class="contact-page">

            <h1 class="section-heading h1 pt-4">Contact Us</h1>

            <br />
            <br />

            <div class="row">

                <div class="col-lg-5 mb-4">
                    <div class="card">

                        <div class="card-body">

                            <div class="form-header blue accent-1">
                                <h3><span style={{ color: "black" }}><i class="fas fa-envelope"></i></span> Write to Us:</h3>
                            </div>

                            <p>We will reply within 24 hours!</p>

                            <br />

                            <div class="md-form" >
                                <span><i class="fas fa-user prefix grey-text"></i></span>
                                <input type="text" id="form-name" class="form-control" placeholder="Your name" />
                            </div>

                            <div class="md-form">
                                <span><i class="fas fa-envelope prefix grey-text"></i></span>
                                <input type="text" id="form-email" class="form-control" placeholder="Your email" />
                            </div>

                            <div class="md-form">
                                <span><i class="fas fa-tag prefix grey-text"></i></span>
                                <input type="text" id="form-Subject" class="form-control" placeholder="Your subject" />
                            </div>

                            <div class="md-form">
                                <span><i class="fas fa-pencil-alt prefix grey-text"></i></span>
                                <textarea id="form-text" class="form-control md-textarea" placeholder="description on what you are emailing for (min 200 characters)......" rows="3"></textarea>
                            </div>

                            <div class="text-center mt-4">
                                <button type="button" class="btn btn-dark">Submit</button>
                            </div>

                        </div>

                    </div>


                </div>



                <div class="col-lg-7">

                    <div id="map-container-google-11" class="z-depth-1-half map-container-6" style={{ height: "400px" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288065.5699074945!2d-75.96505470570541!3d45.26191410626731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1595195786990!5m2!1sen!2sca"
                            frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                    </div>

                    <br />

                    <div class="row text-center">
                        <div class="col-md-4">
                            <a class="btn-floating blue accent-1"><span><i class="fas fa-map-marker-alt"></i></span></a>
                            <p>Ottawa, ON K9A 9A9</p>
                            <p>Canada</p>
                        </div>

                        <div class="col-md-4">
                            <a class="btn-floating blue accent-1"><span><i class="fas fa-phone"></i></span></a>
                            <p>(999)999-9999</p>
                            <p>Mon - Fri, 8:00-22:00</p>
                        </div>

                        <div class="col-md-4">
                            <a class="btn-floating blue accent-1"><span><i class="fas fa-envelope"></i></span></a>
                            <p>info@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>


    );
}

export default Contact;
