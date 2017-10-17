import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const STOCK_EMOJI = 'STOCK_EMOJI'
const stockEmoji = emoji => ({
  type: STOCK_EMOJI, emoji
})

export const loadEmojis = () =>
  dispatch => axios.get('/api/emoji')
    .then(({data: emoji}) => dispatch(stockEmoji(emoji)))    

function reducer(state=[], {type, emoji}) {
  if (type === STOCK_EMOJI)
    return emoji
  return state
}
// The thunk middleware:
//
// store => next => action => {
//   if (typeof action === 'function')
//     return action(store.dispatch, store.getState)
// }

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))