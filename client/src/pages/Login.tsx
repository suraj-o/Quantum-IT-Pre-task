 
import { ChevronDown } from "lucide-react"
import AuthHeader from "../components/AuthHeader"

const Login = () => {
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

        <p className=" self-end mr-10 text-blue-700"> Dont have account</p>

        {/* Input Sections */}

        <form action="" className="flex flex-col items-center justify-start space-y-5 px-3">
           
            <div className="w-full">
                <label htmlFor="phone" className="text-lg text-gray-400 ml-2">Phone Number</label>
                <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                    <p className="inline-flex">IN <ChevronDown /></p>
                    <input required type="number" className="flex-1 outline-none"  />
                </aside>
            </div>

            <div className="w-full">
                <label htmlFor="phone" className="text-lg text-gray-400 ml-2">Your Name</label>
                <aside className="flex space-x-2 p-4 rounded-full shadow-md">
                    <input required type="text" className="flex-1 outline-none" placeholder="Your Name" />
                </aside>
            </div>

            <button className="text-lg font-semibold text-white bg-blue-500 px-8 py-2 rounded-full" type="submit">Sent OTP</button>
   
        </form>


    </div>
  )
}

export default Login