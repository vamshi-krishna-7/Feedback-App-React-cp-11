// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onClickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <>
        <h1 className="Feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(eachItem => (
            <li className="emoji-list-item" key={eachItem.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="emoji-button"
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji-size"
                />
                <p className="emoji-name">{eachItem.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  renderThankyouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <>
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-head">Thank You!</h1>
        <p className="feedback-text">
          We will use your feedback to improve our customer support performance
        </p>
      </>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          {isFeedbackGiven
            ? this.renderThankyouPage()
            : this.renderFeedbackPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
