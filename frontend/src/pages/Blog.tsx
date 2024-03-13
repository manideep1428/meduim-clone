import AppBar from "../components/AppBar"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
  const {id} = useParams();
  const {loading , blog} = useBlog({
    id:id || ""
  });

  if(loading){
    console.log(id)
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
      <div className="grid grid-cols-12">
      </div>
    </div>
  )
}

export default Blog