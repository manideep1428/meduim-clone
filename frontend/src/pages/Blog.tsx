import AppBar from "../components/AppBar"
import FullBlogs from "../components/FullBlogs";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
  const {id} = useParams();
  const {loading , blog} = useBlog({
    id:id || ""
  });

  if(!loading){
    console.log(id)
    {console.log(blog)}
    return(
      <div>
       <AppBar/>
       <h4> .....loading</h4>
      </div>
    )
  }
  //If not Loading
  return (
    <div>
      <AppBar/>
      <FullBlogs blog={blog} />
    </div>
  )
}

export default Blog