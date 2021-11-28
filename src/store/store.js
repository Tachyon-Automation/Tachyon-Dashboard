// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })

import { createStore } from 'redux'

const data = {
  userData: {
    discord: {
      id: '',
      username: '',
      discriminator: '',
      avatar: ''
    },
    webhooks: {},
    access_token: ''
  },

  loaded: true
}

const reducer = (state = data, action) => {
  switch (action.type) {
    case 'START_LOADING': {
      state.loaded = false
      return state
    }
    case 'STOP_LOADING': {
      state.loaded = true
      return state
    }

    case 'LOAD_USER': {
      // console.log(action.payload)
      state.userData.access_token = action.payload.access_token
      state.userData.discord = action.payload.discord
      state.userData.webhooks = action.payload.webhooks
      return state
    }

    case 'UPDATE_WEBHOOKS': {
      // console.log(action.payload)
      state.userData.webhooks = action.payload.webhooks
      return state
    }

    default: return state
  }
}

const store = createStore(reducer)

export default store;