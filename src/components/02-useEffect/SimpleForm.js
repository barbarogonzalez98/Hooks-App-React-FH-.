
import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email:'',
    })

    const {name, email} = formState;

    useEffect(() => {
        console.log('Hola');
    },[])
    useEffect(() => {
        console.log('formState cambio');
    },[formState])
    
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState, 
            [target.name]: target.value
        })
    }

  return (
    <>
    <h1>SimpleForm</h1>
    <hr/>

    <div className='form-group'>
        <input
            type='text'
            name='name'
            className='form-group'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
        />
         <input
            type='text'
            name='email'
            className='form-group'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
        />
    </div>
 
    {(name === '123') && <Message/>}
    
    </>
  )
}
