import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { CHANGE_INPUT_VALUE, VALUE_SUBMIT, DELETE_ITEM } from './store/actionTypes'
import { changeInputValueAction, valueSubmitAction, dleteItemAction, deleteItemAction } from './store/actionCreators'
import store from './store'



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.valueSubmit = this.valueSubmit.bind(this)
        store.subscribe(this.storeChange)
    }


    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{width:'250px',margin:'10px'}}
                        onChange={this.inputChange}
                        value={this.state.inputValue}
                    ></Input>
                    <Button
                        type="primary"
                        onClick={this.valueSubmit}
                    >添加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={ this.state.list }
                        renderItem={(item,index) =>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                        ></List>
                </div>

            </div>
        );
    }

    inputChange(e){
        const action = changeInputValueAction(e.target.value)
        store.dispatch(action)
    }

     storeChange(){
         this.setState(store.getState())
     }

    valueSubmit(){
        const action = valueSubmitAction(this.state.inputValue)
        store.dispatch(action)
    }

    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;