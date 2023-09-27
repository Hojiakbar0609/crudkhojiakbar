import { useSelector, useDispatch } from "react-redux"
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }
  return (
    <div className="container max-w-5xl mx-auto px-5 flex flex-col justify-center">
      <h2 className="text-3xl py-4">Crud App with JSON Server</h2>
      <NavLink to="/create" className="btn btn-primary my-3 w-28">Create</NavLink>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td className="text-lg">{user.name}</td>
              <td className="link link-hover link-secondary text-base">{user.email}</td>
              <td className="flex gap-4">
                <NavLink to={`/edit/${user.id}`} className="btn text-xl btn-accent"><BsFillPencilFill/></NavLink>
                <button onClick={() => handleDelete(user.id)} className="btn text-xl btn-error"><BsFillTrashFill/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home