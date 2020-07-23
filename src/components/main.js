import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Cell } from 'react-mdl';

import Home from './Home';
import About from './About';
import Classes from './Classes';
import Book from './Book';
import Contact from './Contact';
import Join from './Join';
import ClassForm from './ClassForm';


const NoMatchPage = () => {
  return (
    <div class='error-page'>

      <div className="banner-text">
        
        <h1>404 - Page Not Found</h1>
        <p>Oops, looks like your lost.</p>

        <div >
          <Link to="/"><button href="/join" type="button" class="btn btn-light btn-rounded">GO TO HOMEPAGE</button></Link>
        </div>

      </div>

    </div>
  );
};

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/classes" component={Classes} />
    <Route path="/book" component={Book} />
    <Route path="/contact" component={Contact} />
    <Route path="/join" component={Join} />
    <Route path="/claform" component={ClassForm} />
    <Route component={NoMatchPage} />
  </Switch>
)

export default Main;