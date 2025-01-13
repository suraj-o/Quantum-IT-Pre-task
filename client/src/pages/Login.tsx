
import axios, { AxiosError } from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"

const Login = () => {

    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
    const [loading,setloading] =useState<boolean>(false)

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            setloading(true)
            const {data} = await axios.post("http://localhost:3000/user/login",
                { email, password },
                {
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            )
           
            localStorage.setItem("authid",data.authToken)
            setloading(false)
            toast.success(data.message)
            location.reload()

        } catch (error) {
            let  data = (error as AxiosError).response!.data
            toast.error((data as {success:boolean,message:string}).message)
        }
    }


  return (
            <div className="max-w-3xl mx-auto flex flex-col px-3 py-4 lg:mt-6">

            {/* Header */}
            <AuthHeader/>
    
            {/* Writen Content */}
    
            <div className="flex flex-col justify-center px-8 my-16 space-y-4 max-w-[80%]">
                <h1 className="font-bold text-2xl">
                    Login to your account
                </h1>
                <p className="text-gray-400 font-sans text-lg">
                    Good to see you again, enter your details below to continue.
                </p>
            </div>        

            <Link className=" self-end mr-10 text-blue-700" to={"/register"}>
                <p> Dont have account</p>
            </Link>
    
            {/* Input Sections */}
    
            <form
             onSubmit={e=>handleSubmit(e)}
             className="flex flex-col items-center justify-start space-y-5 px-3">
               
                <div className="w-full">
                    <label htmlFor="phone" className="text-lg text-gray-400 ml-2">Email</label>
                    <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                        <input 
                            required
                            name="user-email"
                            type="email" 
                            className="flex-1 outline-none"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                    </aside>
                </div>
    
                <div className="w-full">
                    <label htmlFor="phone" className="text-lg text-gray-400 ml-2">Password</label>
                    <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                        <input 
                            required 
                            type="password" 
                            className="flex-1 outline-none" 
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                    </aside>
                </div>
    
                <button className="text-lg font-semibold text-white bg-blue-500 px-8 py-2 rounded-full" type="submit">
                     { loading?
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        :"Login" 
                     }
                </button>
       
            </form>
    
    
        </div>
    )
}

export default Login