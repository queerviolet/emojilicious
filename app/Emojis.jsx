import React from 'react'
import {connect} from 'react-redux'

import {loadEmojis} from './store'

export class Emojis extends React.Component {
  componentDidMount() {
    this.props.loadEmojis()
      .catch(alert)
  }

  render() {    
    return <ul className='emojis'> {
      this.props.emojis.map(({emoji}) => <li className='emojis-item'>{emoji}</li>)
      
    } </ul>
  }
}

export default connect(emojis => ({emojis}), {loadEmojis})(Emojis)