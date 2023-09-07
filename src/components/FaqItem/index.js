// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImgUrl = () => {
    const {isActive} = this.state
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAltText = isActive ? 'minus' : 'plus'

    return (
      <button className="btn" type="button" onClick={this.onToggleIsActive}>
        <img src={imgUrl} alt={imgAltText} className="img" />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails

    if (isActive) {
      return (
        <>
          <hr />
          <p className="answer">{answerText}</p>
        </>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    return (
      <li className="li-item">
        <div className="main-container">
          <div className="container">
            <h1 className="heading">{questionText}</h1>
            {this.renderActiveImgUrl()}
          </div>
          {this.renderAnswer()}
        </div>
      </li>
    )
  }
}

export default FaqItem
