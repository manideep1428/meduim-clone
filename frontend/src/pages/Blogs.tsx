import AppBar from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const {loading, blogs} = useBlogs();

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
            <BlogCard
              key={blog.id} 
              title={blog.title}
              content={blog.content}
              username={blog.author.name  || ""}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
