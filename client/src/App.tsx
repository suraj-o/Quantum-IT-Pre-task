import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import ProtectedRoutes from "./util/ProtecredRoutes"
import ProtectedRoutesAUth from "./util/protectedRoutesAuth"

const LoginPage = lazy(()=>import("./pages/Login"))
const RagisterPage = lazy(()=>import("./pages/Ragister"))
const HomePage = lazy(()=>import("./pages/Home"))


const App:React.FC = () => {
  return (
    <Router>
        <Suspense fallback={"...loading"}>
             <Routes>

              <Route element={<ProtectedRoutesAUth/>}>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RagisterPage/>}/>
              </Route>

              <Route element={<ProtectedRoutes/>}>
                  <Route path="/" element={<HomePage/>}/>
              </Route>
              
            </Routes>
        </Suspense>
    </Router>
  )
}

export default App