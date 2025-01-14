import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [loading,setloading] =useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setloading(true)
      const { data } = await axios.post(
        "http://localhost:3000/user/register",
        {
          name: name,
          username: username,
          email: email,
          password: password,
          dob: dob,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

       localStorage.setItem("authid",data.authToken)
       toast.success(data.message)
       setloading(false)
       location.reload()
       
        } catch (error) {
            let  data = (error as AxiosError).response!.data
            toast.error((data as {success:boolean,message:string}).message)
        }
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col px-3 py-4">

      <div className="flex flex-col justify-center px-8 my-8 space-y-4 max-w-[80%]">
        <h1 className="font-bold text-2xl">Create an account</h1>
        <p className="text-gray-400 font-sans text-lg">
          Welcome friend, enter your details.
        </p>
      </div>
      <Link className="self-end mr-10 text-blue-700" to={"/"}>
        <p className="self-end text-blue-700"> Already have an account</p>
      </Link>

      {/* Input Sections */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start space-y-5 px-3"
      >
        <div className="w-full">
          <label htmlFor="name" className="text-lg text-gray-400 ml-2">
            Full Name
          </label>
          <aside className="flex space-x-2 p-4 rounded-full shadow-md">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              id="name"
              type="text"
              className="flex-1 outline-none"
              placeholder="Full Name"
            />
          </aside>
        </div>

        <div className="w-full">
          <label htmlFor="username" className="text-lg text-gray-400 ml-2">
            Username
          </label>
          <aside className="flex space-x-2 p-4 rounded-full shadow-md">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              type="text"
              id="username"
              className="flex-1 outline-none"
              placeholder="Username"
            />
          </aside>
        </div>

        <div className="w-full">
          <label htmlFor="email" className="text-lg text-gray-400 ml-2">
            Email Address
          </label>
          <aside className="flex space-x-2 p-4 rounded-full shadow-md">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              id="email"
              placeholder="Email Address"
              className="flex-1 outline-none"
            />
          </aside>
        </div>

        <div className="w-full">
          <label htmlFor="password" className="text-lg text-gray-400 ml-2">
            Password
          </label>
          <aside className="flex space-x-2 p-4 rounded-full shadow-md">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              id="password"
              className="flex-1 outline-none"
              placeholder="Password"
            />
          </aside>
        </div>

        <div className="w-full">
          <label htmlFor="date" className="text-lg text-gray-400 ml-2">
            DOB
          </label>
          <aside className="flex space-x-2 p-4 rounded-full shadow-md">
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              id="date"
              type="date"
              className="flex-1 outline-none"
            />
          </aside>
        </div>

        <button
          className="text-lg font-semibold text-white bg-blue-500 px-8 py-2 rounded-full"
          type="submit"
        >
         { loading?
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            :"Signup" 
         }
        </button>
      </form>
    </div>
  );
};

export default Register;
