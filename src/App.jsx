import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Appointment from "./component/Appointment";
import "./index.css";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/appointment" element={<Appointment />} />
            </Routes>
        </>
    );
}

export default App;
