import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface BlogContent {
  title: string;
  content: string;
}

const NewBlogForm: React.FC = () => {
    const navigate = useNavigate()
  const [blogContent, setBlogContent] = useState<BlogContent>({
    title: '',
    content: ''
});

  const handleBlogSubmit = async () => {
    console.log(blogContent)
    try {
        const response = await axios.post( `${BACKEND_URL}/api/v1/blog` , blogContent)
        const {message} =await response.data
        toast.success(message)
        // setTimeout(()=>
        // navigate("/blogs")
        // ,2000)
    } catch (error:any) {
        toast.error(error)
        setTimeout(()=>
        navigate("/blogs")
        ,2000)
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-8 shadow-lg" >
        <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
        <div className="mb-4"> 
          <Input
            labelName='Title'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter title"
            name="title"
            value={blogContent.title}
            onChange={(e)=>setBlogContent({...blogContent,title:e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter content"
            name="content"
            rows={6}
            value={blogContent.content}
            onChange={(e)=>setBlogContent({...blogContent,content:e.target.value})}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <Button
            className="w-full sm:w-auto bg-gray-500 hover:bg-gray-700 text-white"
            children={"Create"}
            click={handleBlogSubmit}
          />
        </div>
        <ToastContainer/>
    </div>
  );
};

export default NewBlogForm;
