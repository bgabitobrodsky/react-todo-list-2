import React, { useState } from 'react'

export const AddItem = ({setData}) => {

    const [value, setValue] = useState('');
    const [color, setColor] = useState('#eeeeee');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.length > 3){
            const newItem = {
                description: value,
                datetime: new Date().toLocaleString(),
                color:color
            }
            setData((data) => {
                const newData = [newItem,...data];
                localStorage.setItem('data',JSON.stringify(newData));
                return newData;
            })
            setValue('');
        }
    }

    const handleChangeDesc = (e) => {
        setValue(e.target.value);
    }
    
    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row mt-2 mb-2'>
                <div className='col-10'>
                    <input type="text" className='form-control' placeholder='New Item' value={value} onChange={handleChangeDesc}></input>
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
