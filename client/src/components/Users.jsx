import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Users = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    
    axios.get('http://localhost:3009')
    .then(result=>setUsers(result.data))
    .catch(err => console.log(err))
    

  },[]);
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3009/deleteUser/${id}`)
      .then(result => {
        console.log(result);
        // Optionally update the state to remove the user from the UI
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(err => console.log(err));
  };
  

  let step = 1;

  return (
   <>
   <div className="flex   items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Users</h2>
            <p className="text-sm text-gray-600">A list of all the users in your account including their name, title, email and role.</p>
          </div>
          <Link to={'/create'}  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">Add user</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">ID</th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">Name</th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">Email</th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">Age</th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">Action</th>
               
              </tr>
            </thead>
            <tbody className="text-gray-700">
           
            {
              users.map((user)=>{
                return(
              <tr key={user._id}  className="border-t border-gray-200" >
                  <td className="py-3 px-4">{step++}</td>
                  <td className="py-3 px-4">{user.Name}</td>
                  <td className="py-3 px-4">{user.Email}</td>
                  <td className="py-3 px-4">{user.Age}</td>
                  <td className="py-3 px-4">
                      <Link to = {`/update/${user._id}`}  className=' text-indigo-600 hover:text-indigo-900 cursor-pointer'>Edit</Link>
                      <>{' '}</>
                      <button onClick={(e) => deleteUser(user._id)} className=' text-red-600 hover:text-red-900 cursor-pointer'>Delete</button>
                  </td>
            </tr>

                )

              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </>
  )
}

export default Users