import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import AboutUS from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import {Switch, Route, useLocation} from 'react-router-dom'
import MovieDetail from './pages/MovieDetail';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUS />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch> 
      </AnimatePresence>
    </div>
  );
}

export default App;
