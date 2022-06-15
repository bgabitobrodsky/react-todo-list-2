import React, { useState } from 'react'

export const AddItem = ({setData}) => {

    const defaultState = {
        desc: '',
        color: '#eeeeee',
        done: false
    }

    const [{desc,color}, setState] = useState(defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(desc.length > 3){
            const newItem = {
                description: desc,
                datetime: new Date().toLocaleString(),
                color:color
            }
            setData((data) => {
                const newData = [newItem,...data];
                localStorage.setItem('data',JSON.stringify(newData));
                return newData;
            })
            setState({...defaultState,color});
        }
    }

    const handleChangeDesc = (e) => {
        setState(state => ({
            ...state,
            desc: e.target.value
        }));
    }
    
    const handleChangeColor = (e) => {
        setState(state => ({
            ...state,
            color: e.target.value
        }));
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row mt-2 mb-2'>
                <div className='col-10'>
                    <input type="text" className='form-control' placeholder='New Item' value={desc} onChange={handleChangeDesc}></input>
                </div>
                <div className='col-2'>
                    <input type="color" className='form-control h-100' value={color} onChange={handleChangeColor}></input>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col-12'>
                    <button type="submit" className='btn btn-success d-block p-4 m-0 w-100'>Add</button>
                </div>
            </div>
        </form>
    </div>
  )
}
