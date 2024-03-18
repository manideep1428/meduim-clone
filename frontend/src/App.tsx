import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup  from './pages/Signup.tsx'
import Signin  from './pages/Signin.tsx'
import Blogs  from './pages/Blogs.tsx'
import Blog from './pages/Blog.tsx'
import CreateBlog from './pages/CreateBlog.tsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog/new" element={<CreateBlog/>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App