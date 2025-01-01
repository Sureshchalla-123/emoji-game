import './index.css'

const EmojiCard = ({id, details, onEmojiClick}) => {
  const onClicked = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={onClicked}>
        <img
          src={details.emojiUrl}
          alt={details.emojiName}
          className="emoji-image"
        />
      </button>
    </li>
  )
}

export default EmojiCard
