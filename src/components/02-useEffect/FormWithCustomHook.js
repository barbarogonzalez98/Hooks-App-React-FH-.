
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [{name, email, password}, handleInputChange] = useForm({
        name: '',
        email:'',
        password:''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email, password);
    }

  return (
    <form onSubmit={handleSubmit}> 
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
        <input
            type='password'
            name='password'
            className='form-group'
            placeholder='*****'
            value={password}
            onChange={handleInputChange}
        />
    </div>

    <button type='submit' className='btn btn-primary'>
        Guardar
    </button>
 
    </form>
  )
}
