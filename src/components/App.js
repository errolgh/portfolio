import Nav from './Nav'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Footer from './Footer'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Nav />
        <Switch>
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
      <Footer />
    </>
  )
}

// node-sass
// react-fontawesome
// react-router-dom
// emailjs   // perhaps just use catch and modal for email successful submission

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