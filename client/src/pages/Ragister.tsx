 
import { ChevronDown } from "lucide-react"
import AuthHeader from "../components/AuthHeader"
import { useState } from "react"
import OTPComp from "./Otp"
import toast from "react-hot-toast"
import axios from "axios"
import { Link } from "react-router-dom"

const Register = () => {
    const [name,setName]=useState<string>();
    const [lastNmae,setLastName]=useState<string>();
    const [email,setEmail]=useState<string>();
    const [phone,setPhone]=useState<number>();

    const [isOtpPage,setIsOtpPage]=useState<boolean>(false)


    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            const {data} = await axios.post("http://localhost:3000/api/user/register",
                { 
                  name:name,
                  phone:phone,
                  email:email
                },
                {
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            )

            localStorage.setItem("phone",JSON.stringify(phone))
            setIsOtpPage(prev=>!prev)
            
            toast.success(`${data.message}==> ${data.OTP}`)

        } catch (error) {
            console.log(error)
        }
    }

  return isOtpPage ? <OTPComp/> : (
    <div className="max-w-3xl mx-auto flex flex-col px-3 py-4 lg:mt-6">

        {/* Header */}
        <AuthHeader/>

        {/* Writen Content */}

        <div className="flex flex-col justify-center px-8 my-8 space-y-4 max-w-[80%]">
            <h1 className="font-bold text-2xl">
                Create an account
            </h1>
            <p className="text-gray-400 font-sans text-lg">
            Welcome friend, enter your details.
            </p>
        </div>        
        <Link className=" self-end mr-10 text-blue-700" to={"/"}>
            <p className=" self-end mr-10 text-blue-700"> Already have account</p>
        </Link>

        {/* Input Sections */}

        <form 
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-start space-y-5 px-3">


            <div className="w-full">
                <label htmlFor="name" className="text-lg text-gray-400 ml-2">First Name</label>
                <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                    <input
                        value={name} 
                        onChange={e=>setName(e.target.value)} 
                        required  
                        id="name" 
                        type="text" 
                        className="flex-1 outline-none" 
                        placeholder="Your Name" />
                </aside>
            </div>

            <div className="w-full">
                <label htmlFor="last-name" className="text-lg text-gray-400 ml-2">Last Name</label>
                <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                    <input 
                    value={lastNmae} 
                    onChange={e=>setLastName(e.target.value)} 
                    required 
                    type="text" 
                    id="last-name" 
                    className="flex-1 outline-none" 
                    placeholder="Your Last Name" 
                    />
                </aside>
            </div>
           
            <div className="w-full">
                <label htmlFor="phone" className="text-lg text-gray-400 ml-2">Phone Number</label>
                <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                    <p className="inline-flex">IN <ChevronDown /></p>
                    <input
                        value={phone} 
                        onChange={e=>setPhone(Number(e.target.value))} 
                        required 
                        id="phone" 
                        type="number" 
                        className="flex-1 outline-none"  />
                </aside>
            </div>

            <div className="w-full">
                <label htmlFor="email" className="text-lg text-gray-400 ml-2">Email Address (Optional)</label>
                <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                    <input
                        value={email} 
                        onChange={e=>setEmail(e.target.value)} 
                        type="mail" 
                        id="email" 
                        placeholder="Your Email Address" 
                        className="flex-1 outline-none"  />
                </aside>
            </div>



            <button className="text-lg font-semibold text-white bg-blue-500 px-8 py-2 rounded-full" type="submit">Sent OTP</button>
   
        </form>


    </div>
  )
}

export default Register 