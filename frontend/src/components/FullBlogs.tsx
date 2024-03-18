import { Avatar } from "./Avatar";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string | null;
  };
}

const FullBlogs = ({ blog} : {blog: Blog }) => {
  return (
    <div className="text-center m-4 md:grid md:grid-cols-12 md:gap-6 ">
      <div className="md:col-span-12">
        <div className="text-4xl md:text-5xl font-bold mb-6">
          {blog.title}
        </div>
        <div className="text-lg md:text-xl leading-relaxed mb-8">
          {blog.content}
        </div>
        <div className="text-sm md:text-base text-gray-600">       By
        <Avatar className="w-8 h-8 m-1" username={blog.author.name  || "U"} />
          {blog.author.name}
        </div>
      </div>
    </div>
  );
};

export default FullBlogs;
