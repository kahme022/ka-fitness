import React, { Component, useState } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Image } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import boxing from '../img/boxing.png';
import yogaMat from '../img/yoga-mat.png';
import bike from '../img/bike.png';
import gymBall from '../img/gym-ball.png';



class Classes extends Component {

    render() {
        return (
            <div className='class-descriptions'>

                <h1>Class Descriptions</h1>

                <Grid>

                    <Cell col={6} class='unit'>
                        <Image centered src={bike} size='small' />
                        <h3>Cycling</h3>
                        <p>Our Cycling classes will take you on a breath-taking, cardio vascular journey to achieve ultimate lower body tone and strength. Supercharge your metabolic rate through an intense calorie burning workout, leaving you with increased lean muscle mass while seeing your posture, mobility and flexibility dramatically improve.</p>

                        <Link to="/claform"><Button variant="primary">Join Class</Button></Link>

                    </Cell>

                    <Cell col={6} class='unit'>
                        <Image centered src={boxing} size='small' />
                        <h3>Boxing</h3>
                        <p>Learn how to move like some of the fittest athletes in the world. Working your entire body in 45 minutes with a focus on your core and legs, this class will teach you the correct techniques in optimal body and strength control. Work hard, and you will simultaneously achieve new levels of fitness while learning how to defend yourself and increase your confidence.</p>

                        <Link to="/claform"><Button variant="primary">Join Class</Button></Link>

                    </Cell>

                    <Cell col={6} class='unit'>
                        <Image centered src={yogaMat} size='small' />
                        <h3>Yoga</h3>
                        <p>Our Yoga classes are designed to align your mind and body in equal stability, while challenging your core strength. Improve your mobility and endurance in just 45 minutes, while attaining a sense of inner peace by flooding your body with endorphins.</p>

                        <Link to="/claform"><Button variant="primary">Join Class</Button></Link>

                    </Cell>

                    <Cell col={6} class='unit'>
                        <Image centered src={gymBall} size='small' />
                        <h3>Pilates</h3>
                        <p>Combine strength activating movements with floor based Pilates to lengthen and sculpt your muscles. Focus on your technique to improve mobility and posture while activating your core.</p>

                        <Link to="/claform"><Button variant="primary">Join Class</Button></Link>

                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Classes;