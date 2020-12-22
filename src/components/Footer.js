import '../styles/footer.scss'

export default function Footer() {
  return (
    <footer className="page-footer">
      <h1>Errol Watson</h1>
      <ul>
        <li>
          <a href="https://github.com/errolgh" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/errolwatson/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://medium.com/@ewatsonrei" target="_blank" rel="noreferrer">
            Medium
          </a>
        </li>
        <li>
          <a href="https://twitter.com/realErrolWatson" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>
      </ul>
      <ul>
        <li>
          Email:{' '}
          <div>
            <a href="mailto:ewatsonrei@gmail.com">ewatsonrei@gmail.com</a>
          </div>
        </li>
        <li>
          Phone:{' '}
          <div>
            <a href="tel:1-908-472-1977">(908) 472-1977</a>
          </div>
        </li>
      </ul>
    </footer>
  )
}
