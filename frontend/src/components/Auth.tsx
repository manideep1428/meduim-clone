import { Link,useNavigate} from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { SignupInput } from "@manideep1428/meduim-common";
import Button from "./Button";
import axios from "axios";
import {BACKEND_URL} from "../../config"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
 
export const Auth = ({type}:{type:"signup" | "signin"})=>{
    const navigate = useNavigate();
    const [postInput,setPastInput] = useState<SignupInput>({
        name:"",
        email:'',
        password:'' 
    })
    
    const handleApi = async()=>{
      try {
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin"?"signin":"signup"}` ,postInput)
        const {jwt , message} = response.data
        console.log(response.data)
        localStorage.setItem("token", jwt )
        navigate("/blog")
        console.log(response.data)
        toast.success(message)
      } catch(error) {
          console.log(error)
      }
    }

    return(
        <div className="h-screen flex flex-col items-center">
               <div className="text-3xl font-bold">
               { type=="signup" ?  " Create an Account":"Login To Your Account" }
               </div>
               <div className="text-slate-500 ">
                 { type=="signup" ?  "Already Have a Account?":"Don't Have Account?" }
                   <Link className="text-blue-500 pl-2 underline" to={type==="signin" ?"/signup":"/signin"}>
                 { type=="signup" ? "Login" :"SignUp" }
                    </Link>             
               </div>
               <div className="">
                  {type==="signup" && <Input labelName="Username" placeholder="mani1428" name="name"  type="text"
                    value={postInput.name} onChange={(e)=>{
                        setPastInput({...postInput,name:e.target.value})} 
                        } 
                    />}
                    <Input labelName="Email" placeholder="mani1428@gmail.com" name="email" type="email"
                    value={postInput.email} onChange={(e)=>{
                        setPastInput({...postInput, email:e.target.value})} 
                        } 
                    />
                    <Input labelName="Password" placeholder="mani@1428" name="email" type="password"
                    value={postInput.password} onChange={(e)=>{
                        setPastInput({...postInput, password:e.target.value})} 
                        } 
                    />
                    <Button click={handleApi} children={type=="signup"? "Signup" :"SignIn"}/>
               </div>      
             <ToastContainer/>          
        </div>
    )
}

export default Auth;