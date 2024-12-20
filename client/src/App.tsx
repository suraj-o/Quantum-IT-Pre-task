import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

const LoginPage = lazy(()=>import("./pages/Login"))
const RagisterPage = lazy(()=>import("./pages/Ragister"))
const OtpPage = lazy(()=>import("./pages/Otp"))

const App = () => {
  return (
    <Router>
        <Suspense fallback={"...loading"}>
            <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/register" element={<RagisterPage/>}/>
              <Route path="/verify" element={<OtpPage/>}/>
            </Routes>
        </Suspense>
    </Router>
  )
}

export default App