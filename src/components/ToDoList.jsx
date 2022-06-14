import React from 'react';
import { useDispatch } from 'react-redux';
import { toDoAction } from '../store/reducer/uiSlice';
import { useState } from 'react';
import LiList from './LiList';


const ToDoList = () => {

    const [todo, settodo] = useState('');
    const [date, setdate] = useState('');
    const dispatch = useDispatch()


    function toDoChange(e) {
        settodo(e.target.value)
    }
    function toDoChangeDate(e) {
        setdate(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault()
        // console.log(date);

        dispatch(toDoAction.addToDoList({
            todo: todo,
            date: date,
            
        }))

    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <input type="text" onChange={toDoChange} />
                </div>
                <div>
                    <input type="date" onChange={toDoChangeDate} />
                </div>
                <button>Add To Do</button>
            </form>
            <LiList />
        </div>
    );
}

export default ToDoList;
