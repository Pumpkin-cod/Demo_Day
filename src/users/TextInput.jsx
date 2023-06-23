/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const TextInput = ({ label, input, onChange, value}) => {
    return (
        <div className='flex flex-col'>
            <label className='mb-2 text-base text-white'>{label}</label>
            <input className='bg-white py-2 px-3 border-2 outline-none' {...input}
                onChange={onChange}
                value ={value}
            />


        </div>
    )
}

export default TextInput
