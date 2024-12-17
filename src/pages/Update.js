import React, { useEffect, useState } from 'react'
import "../App.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({
      firstname: "",
      lastname: "",
      email: "",
      id: ""
    });

    useEffect(()=>{
      loadUser();
     }, []);


    const {firstname, lastname, email} = student
    
    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setStudent({...student, [name]: value})
    }

    const updateForm = async (e) =>{
    e.preventDefault()
    await axios.post(`http://localhost/reactcrud/react.updateuser.php?id=${id}`,student)
    .then((result)=>{
      //console.log(student);
      if(result.data.status === "valid"){
        console.log('success')
      }
      // else{
      //   alert('An error occurred. Please try again!')
      // }
    })
    
   }


   const loadUser = async () =>{
    const result = await axios.get(`http://localhost/reactcrud/react.update.php?id=${id}`);
    //console.log(result.data);
    if (result.data) {
        setStudent(result.data)
    }else{
      console.log('Error loading user details.')
    }
     
   }

   return (
    <div className='form'>
      {student && ( // Check if student object is populated
        <form onSubmit={(e) => updateForm(e)}>
          <input type='text' name='firstname' value={firstname} placeholder='First Name' onChange={(e) => handleChange(e)} />
          <input type='text' name='lastname' value={lastname} placeholder='Last Name' onChange={(e) => handleChange(e)} />
          <input type='email' name='email' value={email} placeholder='Email' onChange={(e) => handleChange(e)} />
          <input type='submit' name='submit' value='Update' />
        </form>
      )}
    </div>
  )


}

export default Update