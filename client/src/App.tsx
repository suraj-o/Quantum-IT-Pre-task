import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

const LoginPage = lazy(()=>import("./pages/Login"))
const RagisterPage = lazy(()=>import("./pages/Ragister"))
const HomePage = lazy(()=>import("./pages/Home"))


const App:React.FC = () => {
  return (
    <Router>
        <Suspense fallback={"...loading"}>
            <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/register" element={<RagisterPage/>}/>
              <Route path="/Home" element={<HomePage/>}/>n
            </Routes>
        </Suspense>
    </Router>
  )
}

export default App