import React from 'react'
import MoodButton from './MoodButton.js'

export default React.createClass({
  getInitialState: function () {
    return {
      id: this.props.id,
      mood: 'Neutral'
    }
  },

  render () {
    return (
      <div className='family-member'>
        <h2>{this.props.name}</h2>
        <p>Mood: {this.props.moodStates[this.props.id]}
        </p>
        <MoodButton id={this.props.id} changeMood={this.props.changeMood}/>
      </div>
    )
  }
})
