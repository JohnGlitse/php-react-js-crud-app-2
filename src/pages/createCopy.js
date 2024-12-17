import React, { useRef, useState } from 'react'
import "../App.css";

const Create = () => {
    const firstinput = useRef();
    const lastinput = useRef()
    const emailinput = useRef()
    const [firstname, setFirstname] = useState('John');
    const [lastname, setLastname] = useState('Glitse');
    const [email, setEmail] = useState('jglitse@gmail.com');
    
    const addName = () =>{
      const firstvalue = firstinput.current.value;
      const lastvalue = lastinput.current.value;
      const emailvalue = emailinput.current.value

      setFirstname(firstvalue)
      setLastname(lastvalue)
      setEmail(emailvalue)
    }

  return (
    <div className='form'>
        <form>
            <input type='text' name='firstname' value={firstname} placeholder='First Name' ref={firstinput} onChange={addName}/>
            <input type='text' name='lastname' value={lastname} placeholder='Last Name' ref={lastinput} onChange={addName} />
            <input type='email' name='email' value={email} placeholder='Email' ref={emailinput} onChange={addName} />
            <input type='submit' name='submit' value='Submit' />
        </form>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>
    </div>
  )
}

export default Create