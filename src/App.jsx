import Home from './Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Create from './Create'
import Update from './Update'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' index element={<Home/> } />
        <Route path='/create' element={<Create/> } />
        <Route path='/edit/:id' element={<Update/> } />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App