import { configureStore } from '@reduxjs/toolkit'

import entireReducer from './modules/entire'
import homeReducer from './modules/home'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store