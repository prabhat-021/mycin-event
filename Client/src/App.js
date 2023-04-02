import Timeline from "./pages/Timeline/Timeline";
import Home from "./pages/Home/Home";
import "./index.css";
import Team from "./pages/OrganisingTeam/Team_Card_memb";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutKiet from "./pages/About/AboutKiet.js";
import SingElement from "./components/SingleElem/SingElement";
import Allevent from "./components/RythemEvent/Allevent";
import SignupForm from "./pages/signup/signup";
import Login from "./pages/loginPage/Login";
import Form from "./components/EventRegistration/registration";
import ParticlesBackground from "./components/Particle/ParticleBackground";
import LeaderForm from "./components/EventRegistration/teamleader";
import Front from "./pages/FrontPage/front";

export default function App() {
 

  return (
    <>
    <ParticlesBackground/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutKiet" element={<AboutKiet />} />
        <Route path="/singleElement/:id" element={<SingElement />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/events" element={<Allevent />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />}/>
        <Route path="/registration" element={<Form />}/>
        <Route path="/leader-registration" element={<LeaderForm />}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}
