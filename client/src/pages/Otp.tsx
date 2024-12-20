 
import { ChevronDown } from "lucide-react"
import AuthHeader from "../components/AuthHeader"
import OTPInput from "../components/OtpComp"

const OTPComp = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col px-3 py-4 lg:mt-6">

        {/* Header */}
        <AuthHeader/>

        {/* Writen Content */}

         <p className="text-gray-400 font-sans text-md text-center my-16">
            We have sent OTP to Phone number.
        </p>
        <OTPInput/>
    </div>
  )
}

export default OTPComp