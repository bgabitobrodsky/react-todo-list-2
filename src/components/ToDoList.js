import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({data, setData}) => {
  return (
    <div className='todo-grid'>
        {data?.map((item)=> <ToDoItem key={item.datetime} data={item} setData={setData}></ToDoItem>)}
    </div>
  )
}
