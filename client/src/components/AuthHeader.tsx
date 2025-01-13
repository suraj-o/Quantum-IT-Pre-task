import { ArrowLeft } from "lucide-react"


const AuthHeader = () => {
  return (
    <div className="flex items-center mb-6">
        <button className="mt-4 md:hidden" onClick={()=>window.history.back()}><ArrowLeft /></button>
        <div className=" w-full flex justify-center items-center">
            <img src="/logo.webp" className=" w-20 h-20 bg-gray-100 p-4 rounded-full max-sm:mr-8" alt="logo" />
        </div>
    </div>
  )
}

export default AuthHeader