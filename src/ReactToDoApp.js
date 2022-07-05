import React, { useEffect, useReducer } from 'react'
import { AddItem } from './components/AddItem';
import { ToDoList } from './components/ToDoList';
import { getItems } from './helpers/getItems';
import { ReactToDoReducer } from './ReactToDoReducer';

export const ReactToDoApp = () => {

    const [items, dispatch] = useReducer(ReactToDoReducer, [], getItems)

    const handleNewItem = (newItem) => {
        const action = {
            type: "Add",
            payload: newItem
        }

        dispatch(action);
    }

    const handleDeleteItem = (id) => {
        const action = {
            type: "Delete",
            payload: id
        }

        dispatch(action);
    }

    const handleDone = (id) => {
        const action = {
            type: "Done",
            payload: id
        }

        dispatch(action);
    }

    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(items));
    }, [items]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <AddItem 
                        onNewItem={handleNewItem}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ToDoList 
                        onDeleteItem={handleDeleteItem} 
                        onDone={handleDone} 
                        items={items}
                    />
                </div>
            </div>
        </div>
    )
}
