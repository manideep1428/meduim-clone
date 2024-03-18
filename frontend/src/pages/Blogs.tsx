import AppBar from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const {loading, blogs} = useBlogs();
  const navigate = useNavigate()
  const handleBlog=(id)=>{
     navigate(`/blog/${id}`)
  }

  if (!loading) {
    return (
      <div>
        <AppBar />
        <div>
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div>
        {blogs.length === 0 ? (
         <div>Hi there PLease Wait</div>
        ) : (
          blogs.map(blog => (
           <div onClick={()=>handleBlog(blog.id)} key={blog.id}>
              <BlogCard
              title={blog.title}
              content={blog.content}
              username={blog.author.name  || ""}
            />
           </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
