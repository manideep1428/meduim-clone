import axios from "axios";
import { BACKEND_URL } from '../../config';
import { useEffect, useState } from "react";

interface Blog {
  id:string
  username: string;
  title: string;
  content: string;
  author:{
    name:string | null
  }
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      setLoading(true);
      console.log(blogs);
      setBlogs(response.data.blog);
    }).catch((error) => {
      console.error("Error fetching blogs:", error);
    });
  }, []);

  return(
    {loading,
    blogs}
  ) 
     
};
