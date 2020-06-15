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
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
      <BrowserRouter>
        <Header />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/history" component={History} />
              <Route path="/mission" component={Mission} />
              <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
