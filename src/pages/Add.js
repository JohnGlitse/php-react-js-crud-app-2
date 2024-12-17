import React, { useRef, useState } from 'react'
import "../App.css";
import axios from 'axios';

const Add = () => {
    const fname = useRef();
    const lname = useRef();
    const em = useRef();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');    
     
    const [student, setStudent] = useState({
      firstname: "",
      lastname: "",
      email: ""
    });
    //const {firstname, lastname, email} = student
    
    const handleChange = (e) =>{
        setFirstname(fname.current.value);
        setLastname(lname.current.value);
        setEmail(em.current.value);
      //setStudent({...student, [e.target.name]: e.target.value})
      setStudent({
         firstname, lastname, email
      })
    }

    const submitForm = async (e) =>{
    e.preventDefault()
    await axios.post('http://localhost/reactcrud/react.create.php',student)
    .then((result)=>{
      console.log(student);
      if(result.data.status === "valid"){
        console.log('success')
      }else{
        alert('An error occurred. Please try again!')
      }
    })
    
   }

  return (
    <div className='form'>
        <form onSubmit={(e)=> submitForm(e)}>
            <input type='text' name='firstname' value={firstname} placeholder='First Name' ref={fname} onChange={handleChange}/>
            <input type='text' name='lastname' value={lastname} placeholder='Last Name' ref={lname}  onChange={handleChange}/>
            <input type='email' name='email' value={email} placeholder='Email' ref={em} onChange={handleChange}/>
            <input type='submit' name='submit' value='Submit' />
        </form>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>


        {/* {users.map((customer, index) => (
              <tr key={index}>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.email}</td>
                <td>Action Button</td>  
              </tr>
            ))} */}



    </div>
  )
}

export default Add