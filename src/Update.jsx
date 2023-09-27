import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateUser } from './UserReducer'
function Update() {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(f => f.id == id)
  const {name,email} = existingUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }
  return (
    <div className='h-screen flex justify-center items-center'>
              <form onSubmit={handleUpdate} className='card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4'>
                <h2 className='text-center text-2xl font-medium capitalize'>update user</h2>
                  <div>
                      <label htmlFor="name" className='label-text'>Name:</label>
                      <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="enter name" className='form-control input input-bordered input-group-md w-80 opacity-70 capitalize' value={uname}/>
                  </div>
                  <div>
                      <label htmlFor="email" className='label-text'>Email:</label>
                      <input type="email" name='email' onChange={e => setEmail(e.target.value)} placeholder='enter email' className='form-control input input-bordered input-md w-80 opacity-70 capitalize' value={uemail}/>
                  </div>
                  <button className='btn btn-primary btn-block hover:opacity-80 transition duration-200'>update</button>
              </form>
      </div>
  )
}

export default Update