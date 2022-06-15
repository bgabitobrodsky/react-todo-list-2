import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({data, setData}) => {
  return (
    <>
        {data?.map((item)=> <ToDoItem key={item.datetime} data={item} setData={setData}></ToDoItem>)}
    </>
  )
}
