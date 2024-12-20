import { ArrowLeft } from "lucide-react"


const AuthHeader = () => {
  return (
    <div className="flex items-center mb-6">
        <button className="mt-4 md:hidden"><ArrowLeft /></button>
        <div className="flex justify-center items-center">
            <img src="/logo.png" className="w-1/3 max-sm:mr-8" alt="logo" />
        </div>
    </div>
  )
}

export default AuthHeader