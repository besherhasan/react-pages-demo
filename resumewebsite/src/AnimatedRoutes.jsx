import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Certificates from './Certificates';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location =useLocation();
   

  return (
  <AnimatePresence>


<Routes location={location} key={location.pathname}>
<Route exact path="/" element={<HomePage />} />
<Route path="/about" element={<AboutMe />} />
<Route path="/resume" element={<Resume />} />
<Route path="/contact" element={<Contact />} />
<Route path="/certificates" element={<Certificates />} />
</Routes>
  </AnimatePresence>

   
  )
}

export default AnimatedRoutes
