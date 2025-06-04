import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
      <Toaster  />
    </>
  )
}

export default App