import React, { useRef, useState } from "react";

const OTPInput: React.FC = () => {
  // State to store OTP values
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (!/^\d$/.test(value) && value !== "") {
      e.target.value = ""; 
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join(""); 
    console.log("Entered OTP:", otpValue);
    alert(`Entered OTP: ${otpValue}`);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* OTP Inputs */}
      <h2 className="self-start ml-20 text-gray-400">Enter OTP</h2>
      <div className="flex justify-center space-x-8">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-14 h-16 shadow-md border border-gray-300 rounded-full text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            value={otp[index]}
          />
        ))}
      </div>

      {/* Resend button */}
      <button
        className="text-md text-white bg-gray-400 px-6 py-1 rounded-full"
        onClick={handleSubmit}
      >
        Resend
      </button>
      {/* Submit Button */}
      <button
        className="text-lg font-semibold text-white bg-blue-500 px-8 py-2 !my-20 rounded-full"
        onClick={handleSubmit}
      >
        Verify & Proceed
      </button>
    </div>
  );
};

export default OTPInput;
