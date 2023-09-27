import { useState } from "react"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Create() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    navigate('/')
  }
  return (
    <div>
          <div className='h-screen flex justify-center items-center'>
              <form onSubmit={handleSubmit} className='card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4'>
                <h2 className='text-center text-2xl font-medium capitalize'>Add new user</h2>
                  <div>
                      <label htmlFor="name" className='label-text'>Name:</label>
                      <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="enter name" className='form-control input input-bordered input-group-md w-80 opacity-70 capitalize'/>
                  </div>
                  <div>
                      <label htmlFor="email" className='label-text'>Email:</label>
                      <input type="email" name='email' onChange={e => setEmail(e.target.value)} placeholder='enter email' className='form-control input input-bordered input-md w-80 opacity-70 capitalize'/>
                  </div>
                  <button className='btn btn-success btn-block hover:opacity-80 transition duration-200'>Submit</button>
              </form>
        </div>
    </div>
  )
}

export default Create