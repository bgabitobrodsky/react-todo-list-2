import React from 'react'
import { getColors } from '../helpers/getColors'

export const ColorPicker = ({color, setColor}) => {

    const colors = getColors();

    return (
        <>
            <label htmlFor="input-color" className="form-label">Color:</label>
            <input type="color" id='input-color' name='color' className='form-control input-color' value={color} onChange={setColor}></input>
            <div className='used-colors'>
                <label className="form-label d-block mt-3 mb-1">Recent Colors: </label>
                {
                    colors?.map(c => <button className='btn p-3 m-1' key={c} style={{background: c}} onClick={setColor} name='color' value={c}></button>)
                }
            </div>
        </>
    )
}
