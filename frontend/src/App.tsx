import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup  from './pages/Signup.tsx'
import Signin  from './pages/Signin.tsx'
import Blogs  from './pages/Blogs.tsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App