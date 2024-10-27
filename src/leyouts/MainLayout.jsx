import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>

            <div className="min-h-[calc(100vh-124px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;