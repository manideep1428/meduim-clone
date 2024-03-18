import AppBar from "../components/AppBar"
import FullBlogs from "../components/FullBlogs";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string | null;
  };
}

export const Blog = () => {
  const {id} = useParams();
  const {loading , blog} = useBlog({
    id:id || ""
  });

  if(!loading){
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