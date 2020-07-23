import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import logo from './kafitness.png'

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/"><img src={logo} style={ { width: '15%' }} /></Link>} scroll>
            <Navigation>
              <Link to="/about"> <i class="fas fa-info"/> About</Link>
              <Link to="/classes"><i class="fas fa-dumbbell"/> Classes</Link>
              <Link to="/book"><i class="fas fa-calendar-alt"/> Book Now</Link>
              <Link to="/contact"><i class="fas fa-address-book"/> Contact</Link>
              <Link to="/join"><button type="button" class="btn btn-light btn-rounded">Join Now</button></Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">KA Fitness</Link>}>
            <Navigation>
            <Link to="/about">About</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/book">Book Now</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;