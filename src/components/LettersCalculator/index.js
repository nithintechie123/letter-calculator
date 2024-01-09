import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeTextInput = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="calculate-app-container">
        <div className="details-container">
          <h1 className="main-heading">
            Calculate the <br />
            Letters you
            <br /> enter
          </h1>

          <label htmlFor="inputtext">Enter the Phrase</label>
          <input
            type="text"
            label="Enter the phrase"
            className="text-input"
            onChange={this.onChangeTextInput}
            id="inputtext"
          />
          <div className="count-container">
            <p className="count-paragraph">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="calculator-image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
