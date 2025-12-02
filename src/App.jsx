import {Route, Routes} from "react-router-dom";

import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import RegisterPage from "./components/auth/RegisterPage.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import HomePage from "./components/home/HomePage.jsx";
import AllRoomsPage from "./components/bookings-rooms/AllRoomsPage.jsx";

function App() {

    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/home" element={<HomePage/>}/>
                    <Route path="/rooms" element={<AllRoomsPage/>} />
                </Routes>
            </div>
            <Footer/>
        </div>
    )

}

export default App
