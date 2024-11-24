import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
const UpdateUser = () => {
  const {id} = useParams()
  const [Name, setName]=useState('');
  const [Age, setAge]=useState('');
  const [Email, setEmail]=useState('');

  const navigate = useNavigate();

  useEffect(()=>{

    axios.get(`http://localhost:3009/getUser/${id}`)
    .then(result=>{
      setName(result.data.Name)
      setEmail(result.data.Email)
      setAge(result.data.Age)
    })
    .catch(err => console.log(err))
    

  },[id]);

  const Update = (e) =>{
    e.preventDefault();

     axios.put(`http://localhost:3009/updateUser/${id}`,{Name,Email,Age})
    .then(result=> {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
   



  }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Update New Information
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#"  onSubmit={Update} className="space-y-6">
          <div>
              <label  className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={Name}
                  onChange={(e)=>setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={Email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
           
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Age
                </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={Age}
                  onChange={(e)=>setAge(e.target.value)}
                  required
                  className="block mb-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
     

            <div>
              <button
                type="submit"
                onSubmit={Update}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
            </div>
          </form>

          
        </div>
      </div>
    </>
  )
}

export default UpdateUser