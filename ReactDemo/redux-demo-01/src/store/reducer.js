const defaultState = {
    inputValue: 'input something',
    list: [
        'AAAAAAAA',
        'BBBBBBBB',
        'CCCCCCCC'
    ]
}

export default (state = defaultState,action)=>{
    if(action.type === 'change_input_value'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log(newState)
        return newState
    }
    return state
}