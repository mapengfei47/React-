import React,{ Component,Fragment} from 'react';
import TodoItem from './todoItem'
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: [1,2,3]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    ></input>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <ul>
                   { this.handleItem() }
                </ul>
            </Fragment>
        )
    }

    handleItem(){
         return this.state.list.map((item,index) =>{
            return (
            <div key={index}>
                <TodoItem
                content={item}
                index={index}
                deleteItem={this.handleDelete}
                />
            {/* <li key={index}
            onClick={this.handleDelete.bind(this,index)}
            dangerouslySetInnerHTML={{__html: item}}
            >
            </li> */}
            </div>
            )
        })
    }

    handleInputChange(e){
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleSubmit(){
        this.setState(( preState ) => ({
            list: [...preState.list,preState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list,this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index,1)
        this.setState(() => ({
            list:list
        }))
        // this.setState({
        //     list: list
        // })
    }
}
export default TodoList