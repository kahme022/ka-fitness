import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'

class Home extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>For all your 
                                
                                <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    ' health needs.',
                                    1500,
                                    ' life needs.',
                                    1500,
                                    ' fitness needs.',
                                    1500
                                ]}
                                />
                                
                            </h1>

                            <div className="social-links">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>

                    <Cell col={12}>
                    <Link to="/join"><button href="/join" type="button" class="btn btn-light btn-rounded">Join Now</button></Link>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;
