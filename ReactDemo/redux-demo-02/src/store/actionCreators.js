import { CHANGE_INPUT_VALUE, VALUE_SUBMIT, DELETE_ITEM } from './actionTypes'

export const changeInputValueAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const valueSubmitAction = (value)=>({
    type: VALUE_SUBMIT,
    value
})

export const deleteItemAction = (index)=>({
    type: DELETE_ITEM,
    index
})