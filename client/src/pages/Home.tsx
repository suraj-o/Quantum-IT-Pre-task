import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate= useNavigate()

    const token= localStorage.getItem("token") as string

    useEffect(() => {

        (
            async function(){
                try {
                    
                    const {data} = await axios.get("http://localhost:3000",{
                        headers:{
                            "Authorization":`Bearer ${token}`
                        }
                    })

                    if(!data.success){
                        navigate("/")
                    }

                } catch (error) {
                        navigate("/") 
                }
            }         
        )()

    }, [])
    


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyLandingPage</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white flex-grow flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to MyLandingPage</h2>
          <p className="text-lg mb-6">
            Your one-stop solution for amazing web experiences.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Feature One</h4>
              <p className="text-gray-600">Experience lightning-fast performance.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Feature Two</h4>
              <p className="text-gray-600">Intuitive design to delight users.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Feature Three</h4>
              <p className="text-gray-600">Secure and reliable architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MyLandingPage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
