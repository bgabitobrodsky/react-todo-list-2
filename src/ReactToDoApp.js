import React, { useEffect, useState } from 'react'
import { AddItem } from './components/AddItem';
import { ToDoList } from './components/ToDoList';
import { getItems } from './helpers/getItems';

export const ReactToDoApp = () => {

    const [items, setItems] = useState(getItems());

    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(items));
    }, [items]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <AddItem setItems={setItems}></AddItem>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ToDoList setItems={setItems} items={items}></ToDoList>
                </div>
            </div>
        </div>
    )
}
