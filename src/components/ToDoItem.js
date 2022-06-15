import React, { useState } from 'react'

export const ToDoItem = ({data:{description:desc,datetime,color,done}, setData}) => {
    
    const [className, setClassName] = useState(()=>{
        if(new Date().toLocaleString() === datetime){
            return 'todo-item animate__animated animate__backInLeft animate__faster'
        }else{
            return 'todo-item';
        }
    })

    const handleRemove = (e) => {
        setClassName('todo-item animate__animated animate__backOutRight')
        setTimeout(()=>{
            setData((data) => {
                const newData = data.filter(item => item.datetime !== datetime);
                localStorage.setItem('data',JSON.stringify(newData));
                return newData;
            })
        },360)
    }

    const handleDone = (e) => {
        setData((data) => {
            const index = data.findIndex(item => item.datetime === datetime);
            data[index].done = true;
            const newData = Array.from(data);
            localStorage.setItem('data',JSON.stringify(newData));
            return newData;
        })
        setClassName('todo-item animate__animated animate__tada')
    }
    
    return (
        <div className={className} style={{backgroundColor: color}}>
            <div className='todo-item-desc'>
                <h3>{desc}</h3>
                <p>{datetime}</p>
            </div>
            <div className='buttons'>
                {
                    !done? (
                        <button className='btn btn-success' onClick={handleDone}>
                            Done
                        </button>
                    ):(
                        <span className='mr-2'>
                            Done!
                        </span>
                    )
                }
                <button className='btn btn-danger ml-2' onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    )
}
