import Home from "./pages/Home/Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutKiet from "./pages/About/AboutKiet.js";
import SingElement from "./components/SingleElem/SingElement";
import AboutPrastuti from "./pages/About/AboutPrastuti";
import Allevent from "./components/RythemEvent/Allevent";
// import Timeline from "./components/Timeline_react/Timeline";
// import SignupForm from "./components/signup/signup";
// import Login from "./components/loginPage/Login";

export default function App() {
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutKiet" element={<AboutKiet />} />
        <Route path="/singleElement/:id" element={<SingElement />} />
        {/* <Route path="/timeline" element={<Timeline />} /> */}
        <Route path="/aboutPrastuti" element={<AboutPrastuti />} />
        <Route path="/events" element={<Allevent />} />
        {/* <Route path="/signup" element={<SignupForm />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    </BrowserRouter>
  );
}
