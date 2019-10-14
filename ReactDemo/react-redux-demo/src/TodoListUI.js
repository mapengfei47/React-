import React from 'react';

const TodoListUI = (props)=>{
    let {inputValue, inputChange, inputSubmit, list, deleteItem} = props
    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={inputChange}
                />
                <button
                    onClick={inputSubmit}
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (
                        <li
                            key={index}
                            onClick={()=>{
                                return deleteItem(index)
                            }}
                        >{item}</li>)
                    })
                }

            </ul>
        </div>
    )
}

export default TodoListUI