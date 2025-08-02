import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   if (loading) {
      return <Loader />;
   }

   return (
      <div className="container">
         <BrowserRouter basename="/web-portfolio">
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
