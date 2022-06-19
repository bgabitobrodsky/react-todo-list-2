import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({items, setItems}) => {
  return (
    <div className='todo-grid'>
        {items?.map((item)=> <ToDoItem key={item.datetime} item={item} setItems={setItems}></ToDoItem>)}
    </div>
  )
}
