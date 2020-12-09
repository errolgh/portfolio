import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'
import Footer from './Footer'
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
        </Switch>
      <Footer />
    </>
  )
}


// node-sass
// react-fontawesome (add license... maybe MIT for other packs)












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