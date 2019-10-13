import { CHANGE_INPUT_VALUE, VALUE_SUBMIT, DELETE_ITEM } from './actionTypes'
const defaultState = {
    inputValue: 'input something',
    list: [
        'AAAAAAAA',
        'BBBBBBBB',
        'CCCCCCCC'
    ]
}

export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log(newState)
        return newState
    }

    if(action.type === VALUE_SUBMIT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(action.value)
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}