import {
    TODO_ADD,
    TODO_UPDATE,
    TODO_DELETE,
    TODO_CLEAR
  } from '../actionTypes'
  
  let initState = {
    msg: 'hello todo',
    list: [
      {id:1, task: '学习'},
      {id:2, task: '学习'}
    ]
  }
  
  export default function reducer(state=initState, action) {
    switch (action.type) {
      case TODO_ADD:
        // state只读的
        console.log('add',action)
        let newState = JSON.parse(JSON.stringify(state))
        // let newState = Object.assign({}, state)
        // let newState = {...state}
        newState.list.push(action.payload)
        return newState
      case TODO_UPDATE:
        return state
      case TODO_DELETE:
        console.log('del',action)
        let newState1 = JSON.parse(JSON.stringify(state))
        newState1.list.map((ele,idx,arr)=>{
          if(ele.id === action.payload) {
            arr.splice(idx, 1)
          }
          return false
        })
        return newState1
      case TODO_CLEAR:
        console.log('clear',action)
        let newState2 = JSON.parse(JSON.stringify(state))
        newState2.list = []
        return newState2
      default:
        return state
    }
  }
  