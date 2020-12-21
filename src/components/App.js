import Nav from './Nav'
import '../styles/app.scss'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  const location = useLocation()
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  )
}

// design thinking (Not a linear process (think linked list))

// Empathize > Define > Ideate > Prototype > Test

// upgraded "ini" in package-lock.json to 1.3.6 from 1.3.5
//react router netlify 404: https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa
// for environment variables deployed on netlify, go to Settings > Build & Deploy > Environment > Edit Variables

// node-sass
// react-fontawesome
// react-router-dom
// emailjs   //catch and modal for email successful submission
// framer-motion
// add license(s) per pack

//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
