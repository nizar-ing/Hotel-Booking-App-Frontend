import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import RegisterPage from "./components/auth/RegisterPage.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import HomePage from "./components/home/HomePage.jsx";
import AllRoomsPage from "./components/bookings-rooms/AllRoomsPage.jsx";
import RoomDetailsPage from "./components/bookings-rooms/RoomDetailsPage.jsx";
import {Toaster} from "react-hot-toast";
import {CustomerRoute} from "./services/guard.jsx";
import FindBookingPage from "./components/bookings-rooms/FindBookingPage.jsx";

function App() {

    return (
        <BrowserRouter>
            <Toaster/>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route exact path="/home" element={<HomePage/>}/>
                        <Route path="/rooms" element={<AllRoomsPage/>}/>
                        <Route path="/find-booking" element={<FindBookingPage/>}/>

                        <Route
                            path="/room-details/:roomId"
                            element={
                                <CustomerRoute>
                                    <RoomDetailsPage/>
                                </CustomerRoute>
                            }
                        />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )

}

export default App
