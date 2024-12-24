import { Link } from 'react-router-dom'
import './index.scss'
import letter from '../../assets/letters/m.png'

const Home = () => {
  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          Welcome, <br /> I'm
          <img src={letter} alt="developer" />
          aura Sweeney
        </h1>
        <h2> Things about me </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
