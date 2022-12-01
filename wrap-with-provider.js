import React from "react"
import { Provider } from "react-redux"
import configureStore from "./src/app/store"

const providerWrapper = ({ element }) => {

  const store = configureStore;
  console.log(store);
  return <Provider store={store}>{element}</Provider>
}

export default providerWrapper;