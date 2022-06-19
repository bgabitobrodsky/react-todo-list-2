import React from 'react'

export const UsedColors = ({handleChangeColor, colors}) => {

    return (
        <>
            {colors?.map(c => console.log(c) )}
        </>
    )
}
