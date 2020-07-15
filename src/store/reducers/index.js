let initState = {
    msg: 'hello redux',
    list: []
  }

export default function reducer(state=initState,action) {
    switch (action.type){
        case 1:
            console.log('1,收到了',action)
            let newState = JSON.parse(JSON.stringify(state))
            newState.msg = action.payload
            //state.msg = action.payload
            return newState
        case 2:
            //state.list.push(action.payload)
            return state
        case 3:
            //state.list.splice(action.payload,1)
            return state
        default:
            return state
    }
}