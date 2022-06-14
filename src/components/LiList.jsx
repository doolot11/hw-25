import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toDoAction } from '../store/reducer/uiSlice';

const LiList = (props) => {
    const dispatch = useDispatch()
    const todotoolkit = useSelector(state => state.todo.itemToDo)

    const  onDelete=(id) =>{
        dispatch(toDoAction.deleteFunc(id))
    }
    return (
        <div>
            {todotoolkit.map((item) => {
                return <li key={item.id}>
                    {item.todo} {item.date}
                    <button  onClick={()=> onDelete(item.id)} >delete</button>
                  

                </li>
            })}

        </div>
    );
}

export default LiList;
