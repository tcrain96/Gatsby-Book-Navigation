import { configureStore } from '@reduxjs/toolkit'
import pageNumberReducer from "../features/PageNumber/pageNumberSlice"
import activeLayerReducer from "../features/ActiveLayer/activeLayerSlice"
const store = configureStore({
  reducer: {
    pageNumber:pageNumberReducer,
    activeLayer:activeLayerReducer
  },
})

export default store;