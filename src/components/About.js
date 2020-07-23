import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


import khalid from "../img/khalid.jpg"
import jake from "../img/jake.jpg"
import obi from "../img/obi.jpg"

class About extends Component {
    render() {
        return (
            <div>
                <Grid class="about-grid">
                    <Cell col={12}>
                        <div class='about-banner'>
                            <h1>Who We Are</h1>
                            <br />
                            <p>KA Fitness is a multi-purpose gym founded in 2020 as a family owned and operated business. We didn’t want it to be just another gym - we wanted it to be the best in the industry! We want to help you live a fit and healthy lifestyle! We do this by offering world-class equipment, facilities, personal trainers, and amenities at our gyms all while  keeping your budget, lifestyle and fitness goals in mind. Our awesome team is always keen to help, so please call us to discuss anything.</p>
                        </div>
                    </Cell>

                    <Cell col={12}>

                        <div class="about-banner">
                            <h1>Our Team</h1>

                            <div class="row">

                                <div class="column">
                                    <div class="card">
                                        <img src={khalid} alt="Khalid" />
                                        <div class="container">
                                            <h3>Khalid Ahmed</h3>
                                            <p class="title">CEO & Founder</p>
                                            <p>Founder of KA Fitness</p>
                                            <p>khalid@kafitness.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="card">
                                        <img src={jake} alt="Jake" />
                                        <div class="container">
                                            <h3>Jake Owens</h3>
                                            <p class="title">Personal Trainer</p>
                                            <p>Personal Trainer with 15+ years of experience</p>
                                            <p>jake@kafitness.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="card">
                                        <img src={obi} alt="Obi" />
                                        <div class="container">
                                            <h3>Obi Adams</h3>
                                            <p class="title">Personal Trainer</p>
                                            <p>Personal Trainer with 10+ years of experience</p>
                                            <p>obi@kafitness.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;
