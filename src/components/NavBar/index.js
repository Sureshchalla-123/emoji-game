import './index.css'

const NavBar = ({score, topScore, isGameEnd}) => (
  <nav className="navbar-container">
    <div className="logo">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
      </div>
      <h1 className="logo-title">Emoji Game</h1>
    </div>
    <div className="score-container">
      {score < 12 && <p className="score">Score: {score}</p>}
      {score < 12 && <p className="top-score">Top Score: {topScore}</p>}
    </div>
  </nav>
)

export default NavBar
