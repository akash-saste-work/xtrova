import React, { useEffect } from 'react'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from '../src/screens/pages/home/Home'
import About from '../src/screens/pages/about/About';
import Contact from '../src/screens/pages/contact/Contact';
import Privacy from '../src/screens/privacy-policy.js';
import Terms from '../src/screens/terms-condition.js';
import Stars from '../src/components/Stars.js';


// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );


function App() {

  const checkDivDataOnScroll = () =>{
    const section = document.querySelectorAll('section');
    for(let i=0; i<section.length; i++){
      const rect = section[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight/4 ) {
        if(section[i].id){
          const navLinks = document.getElementsByClassName('nav-link')
          for(let j=0; j<navLinks.length; j++){
            const name = navLinks[j].getAttribute('data-name');
            if(name === `#${section[i].id}`){
              navLinks[j].classList.add('nav-link.active')
            }else{
              navLinks[j].classList.remove('nav-link.active')
              navLinks[j].style.color = '#fff'
            }
          }
        }
        break;
      }
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', checkDivDataOnScroll);
  }, [])

  return (
    <HashRouter>
      <div className="starry-night">
        <Stars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Terms />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
