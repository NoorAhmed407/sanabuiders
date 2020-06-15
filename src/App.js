import React, { Component } from 'react';
import Header from './components/header';
import Carousal from './components/carousal';
import Body from './components/body';
import OurTeam from './components/ourteam';
import Footer from './components/footer'
import About from './components/About';
import Mission from './components/Misison';
import History from './components/History';
import Contact from './components/Contact';

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Carousal />
        <Body />
        <OurTeam />
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <div>
      <Header />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
