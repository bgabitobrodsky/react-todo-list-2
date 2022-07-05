import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({items, onDeleteItem, onDone}) => {
  return (
    <div className='todo-grid'>
        {items?.map((item)=> <ToDoItem key={item.id} item={item} onDeleteItem={onDeleteItem} onDone={onDone}/>)}
    </div>
  )
}
