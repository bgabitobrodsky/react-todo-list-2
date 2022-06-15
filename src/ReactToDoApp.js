import React, { useEffect, useState } from 'react'
import { AddItem } from './components/AddItem';
import { ToDoList } from './components/ToDoList';

export const ReactToDoApp = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const localStorageData = JSON.parse(localStorage.getItem('data'));
        localStorageData && setData(localStorageData);
    }, [setData]);



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <AddItem setData={setData}></AddItem>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ToDoList setData={setData} data={data}></ToDoList>
                </div>
            </div>
        </div>
    )
}
