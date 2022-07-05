import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

export const ToDoItem = ({item:{title,desc,datetime,color,done,id}, onDeleteItem, onDone}) => {
    
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
            onDeleteItem(id);
        },360)
    }

    const handleDone = (e) => {
        onDone(id);
        setClassName('todo-item animate__animated animate__tada')
    }
    
    return (
        <div className={className} style={{borderLeftColor: color}}>
            <div className='todo-item-desc'>
                <h3>{title}</h3>
                <p className='item-datetime'>{datetime}</p>
                {
                    desc && desc.length > 0 && <p className='item-desc'>{desc}</p>
                }
            </div>
            <div className='buttons'>
                {
                    !done? (
                        <button className='btn btn-success' onClick={handleDone}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                    ):(
                        <span className='mr-2'>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    )
                }
                <button className='btn btn-danger ml-2' onClick={handleRemove}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )
}
