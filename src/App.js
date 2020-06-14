import React from 'react';
import Header from './components/header';
import Carousal from './components/carousal';
import Body from './components/body';
import OurTeam from './components/ourteam';
// import FooterPage from './components/footer'
function App() {
  return (
    <div>
      <Header />
      <Carousal />
      <Body />
      <OurTeam />
      {/* <FooterPage /> */}
    </div>
  );
}

export default App;
