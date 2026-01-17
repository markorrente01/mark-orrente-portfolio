import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      once: true,
      delay: 100,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route index element={<Home />}/>
         <Route path="*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
