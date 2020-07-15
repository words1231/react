import { createStore, combineReducers } from 'redux'

// 分模块后的子reducer
import test from './reducers/index'
import todo from './reducers/todo'

// 把多个子reducer函数，合并成一个reducer
const reducer = combineReducers({
  test,
  todo
})

// 创建一个store，第一参数是必填，它是reducer
const store = createStore(reducer)

export default store
