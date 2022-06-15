import React from 'react'

export const ToDoItem = ({data:{description:desc,datetime,color}, setData}) => {

    const handleRemove = (e) => {
        setData((data) => {
            const newData = data.filter(item => item.datetime !== datetime);
            localStorage.setItem('data',JSON.stringify(newData));
            return newData;
        })
    }

  return (
    <div className='todo-item' style={{backgroundColor: color}}>
        <div className='todo-item-desc'>
            <h3>
                {desc}
            </h3>
            <p>
                {datetime}
            </p>
        </div>
        <button className='btn btn-success' onClick={handleRemove}>
            Done
        </button>
    </div>
  )
}
