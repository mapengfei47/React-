import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() {
        let {inputValue, inputChange, inputSubmit, list, deleteItem} = this.props
        return <TodoListUI
            inputValue={ inputValue }
            inputChange={ inputChange }
            inputSubmit={ inputSubmit }
            list={ list }
            deleteItem={ deleteItem }
        />
        // (
        //     <div>
        //         <div>
        //             <input
        //                 value={this.props.inputValue}
        //                 onChange={this.props.inputChange}
        //             />
        //             <button
        //                 onClick={this.props.inputSubmit}
        //             >提交</button>
        //         </div>
        //         <ul>
        //             {
        //                 this.props.list.map((item,index)=>{
        //                     return (
        //                     <li
        //                         key={index}
        //                         onClick={()=>{
        //                             return this.props.deleteItem(index)
        //                         }}
        //                     >{item}</li>)
        //                 })
        //             }

        //         </ul>
        //     </div>
        //  );
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        inputSubmit(){
            let action = {
                type:'input_submit'
            }
            dispatch(action)
        },
        deleteItem(index){
            let action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}


const stateToProps = (state)=>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// export default TodoList;
export default connect(stateToProps,dispatchToProps)(TodoList)