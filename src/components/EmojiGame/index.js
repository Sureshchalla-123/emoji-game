import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    touchedEmoji: [],
    isGameEnd: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {touchedEmoji, score, topScore} = this.state
    const isClicked = touchedEmoji.includes(id)

    if (isClicked) {
      this.setState({isGameEnd: true})
    } else {
      const newScore = score + 1
      const updatedTopScore = newScore > topScore ? newScore : topScore

      this.setState(prevState => ({
        score: newScore,
        topScore: updatedTopScore,
        touchedEmoji: [...prevState.touchedEmoji, id],
        isGameEnd: newScore === 12, // End game if score reaches 12
      }))
    }
  }

  gameReInitialise = () => {
    this.setState({
      score: 0,
      touchedEmoji: [],
      isGameEnd: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isGameEnd} = this.state

    return (
      <div className="game-background-container">
        <NavBar score={score} topScore={topScore} isGameEnd={isGameEnd} />
        <main className="game-body">
          {isGameEnd ? (
            <WinOrLoseCard
              score={score}
              gameReInitialise={this.gameReInitialise}
            />
          ) : (
            <ul className="emoji-list">
              {this.shuffledEmojisList().map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  id={emoji.id}
                  details={emoji}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          )}
        </main>
      </div>
    )
  }
}

export default EmojiGame
