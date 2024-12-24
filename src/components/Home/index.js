import './index.scss'
import m from '../../assets/letters/m.png'
import a from '../../assets/letters/a.png'
import u from '../../assets/letters/u.png'
import r from '../../assets/letters/r.png'
import s from '../../assets/letters/s.png'
import w from '../../assets/letters/w.png'
import e from '../../assets/letters/e.png'
import n from '../../assets/letters/n.png'
import y from '../../assets/letters/y.png'

const Home = () => {
  const firstNameArray = [
    { letter: m, alt: 'M' },
    { letter: a, alt: 'a' },
    { letter: u, alt: 'u' },
    { letter: r, alt: 'r' },
    { letter: a, alt: 'a' },
  ]

  const lastNameArray = [
    { letter: s, alt: 'S' },
    { letter: w, alt: 'w' },
    { letter: e, alt: 'e' },
    { letter: e, alt: 'e' },
    { letter: n, alt: 'n' },
    { letter: e, alt: 'e' },
    { letter: y, alt: 'y' },
  ]

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          Welcome, I'm
          <span className="letters-container">
            {firstNameArray.map((letter, idx) => (
              <span
                className="letter-wrapper"
                key={`first-${idx}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img src={letter.letter} alt={letter.alt} />
              </span>
            ))}
            <span className="name-space"></span>
            {lastNameArray.map((letter, idx) => (
              <span
                className="letter-wrapper"
                key={`last-${idx}`}
                style={{
                  animationDelay: `${(idx + firstNameArray.length) * 0.1}s`,
                }}
              >
                <img src={letter.letter} alt={letter.alt} />
              </span>
            ))}
          </span>
        </h1>
        <h2> Things about me </h2>
      </div>
    </div>
  )
}

export default Home
