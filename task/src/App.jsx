import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Service from "./pages/Service";
import Strategies from "./pages/Strategies";
import Content from "./pages/Content";



const App=()=>{
  return(
    <>
           <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                  <Route path="about" element={<About/>}/>
                  <Route path="service" element={<Service/>}/>
                  <Route path="tailored" element={<Strategies/>}/>
                  <Route path="content" element={<Content/>}/>
                  
                  
                  </Route>
              </Routes>
           </BrowserRouter>
         
    </>
  )
}
export default App;