import React from 'react'
import axios from 'axios'

// Debugging:
window.axios = axios

import {render} from 'react-dom'

import store from './store'
import Emojis from './Emojis'

import {Provider} from 'react-redux'

render(<Provider store={store}>
        <Emojis />
       </Provider>, main)