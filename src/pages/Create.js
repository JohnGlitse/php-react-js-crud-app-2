import React, { useState } from 'react'
import "../App.css";
import axios from 'axios';

const Create = () => {
     
    const [student, setStudent] = useState({
      firstname: "",
      lastname: "",
      email: ""
    });

    const [errors, setErrors] = useState({});

    const {firstname, lastname, email} = student
    
    const handleChange = (e) =>{
      //const name = e.target.name;
      //const value = e.target.value;
      setStudent({...student, [e.target.name]: e.target.value})
    }

    const submitForm = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost/reactcrud/react.create.php', student)
          .then((result) => {
              if (result.data.status === "Valid") {
                 // console.log('success');
              } else if (result.data.errors) {
                  setErrors(result.data.errors);
              } else {
                 // alert('An error occurred. Please try again!');
              }
          });
  }

  return (
    <div className='form'>
        <form onSubmit={(e)=> submitForm(e)}>
            <input type='text' name='firstname' value={firstname} placeholder='First Name' onChange={e=> handleChange(e)} required/>
            {errors.firstname && <p className="error">{errors.firstname}</p>}
            <input type='text' name='lastname' value={lastname} placeholder='Last Name'  onChange={e=> handleChange(e)}/>
            {errors.lastname && <p className="error">{errors.lastname}</p>}
            <input type='email' name='email' value={email} placeholder='Email' onChange={e=> handleChange(e)}/>
            {errors.email && <p className="error">{errors.email}</p>}
            <input type='submit' name='submit' value='Submit' />
        </form>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>
    </div>
  )
}

export default Create