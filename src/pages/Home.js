import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Home = () => {
 // const [users, setUsers] = useState([]);
//   useEffect(()=>{
//     getUsers();
//   }, []);

//   const getUsers = () =>{
//     axios.get('http://localhost/reactcrud/react.read.php')
//     .then((response) =>{
//       console.log(response.data);
//       setUsers(response.data);
//     })
//   }
//  console.log(users)

//const { id } = useParams();
const [users, setUsers] = useState({});
const [loading, setLoading] = useState(true); // State to manage loading state

useEffect(() => {
  getUsers();
}, []);

const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost/reactcrud/react.read.php');
   // console.log('Response data:', response.data);
    setUsers(response.data); // Update users state with fetched data
    setLoading(false); // Update loading state once data is fetched
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading state is updated even on error
  }
}

//const deleteUser = async (id) =>{
  //const response = await axios.delete(`http://localhost/reactcrud/react.delete.php?id=${id}`);

  //   getUsers()
  // })
//}

const deleteUser = (id) =>{
  //return confirm("do yo want to delete");
  axios.post(`http://localhost/reactcrud/react.delete.php?id=${id}`)
  .then((result)=>{
    getUsers()
  }).catch(()=>{
    alert('Error in the code')
  })
}

return (
  <div>
  {loading ? (
    <p>Loading...</p>
  ) : (
    <table border={1}>
        <tr>
          <th>FIRSTNAME</th>
          <th>LASTNAME</th>
          <th>EMAIL</th>
          <th>UPDATE</th>
          <th>DELETE</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>
              { <Link to={`Update/${user.id}`}>Edit</Link> }
            </td>
            <th>
            <button onClick={()=> deleteUser(user.id)}>Delete</button>
            </th>

          </tr>
        ))}
    </table>
  )}
</div>
)

}

export default Home
