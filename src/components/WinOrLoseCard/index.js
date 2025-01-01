import './index.css'

const WinOrLoseCard = ({score, gameReInitialise}) => {
  const win = score === 12

  const playAgain = () => {
    gameReInitialise()
  }

  return (
    <div className="win-or-lose-card">
      <div className="text-container">
        <h1 className="wol-heading">{win ? 'You Won' : 'You Lose'}</h1>
        <p className="best-score">Best Score</p>
        <p className="score-board">{score}/12</p>
        <button type="button" className="paly-again-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img
          src={
            win
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
          className="wol-image"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
