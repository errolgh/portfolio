import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

/* TODO
consider removing phone number so your phone doesn't blow up with span texts/calls
remove phone number in case your site gets crawled by spammer bots
captcha:
https://www.a2hosting.com/blog/implement-captcha-solution-website/

Overall responsiveness for site
-media queries
-remove min-widths

Fix/add scroll bars

Hamburger Menu for Nav

add different projects

add detail list for projects
-add framer motion modal if possible

pull projects from separate folder

*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
