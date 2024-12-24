import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <h1>About Me</h1>
        <p></p>
        <Link
          to="https://maurasweeney1.github.io/best-self/"
          className="best-self-button"
        >
          My Best Self
        </Link>
      </div>
    </>
  )
}

export default About
