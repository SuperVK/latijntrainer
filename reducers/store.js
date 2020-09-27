import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import question from './question'
import questionSet from './questionSet'


const combinedReducer = combineReducers({
	question,
	questionSet,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      	...state, // use previous state
	  	...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer)
}

export const wrapper = createWrapper(initStore)