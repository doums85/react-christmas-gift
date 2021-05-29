import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Decoration from './Components/Decoration/Decoration';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Share from './Components/Share/Share';
import Accessory from './Components/Accessory/Accessory';
import SendGift from './Components/SendGift/SendGift';
import Footer from './Components/Footer/Footer';

function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  Aos.init({
    duration: 2000
  })
  return (
    <div className="App">
      <Router>
      <Nav changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
      <Home />
      <Share />
      <Decoration />
      <Accessory />
      <SendGift />
      <Footer changeTheme={changeTheme}/>
      </Router>
    </div>
  );
}

export default App;
