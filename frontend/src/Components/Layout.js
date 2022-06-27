import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="App">
            <NavBar />
                <Outlet />
            <Footer />
        </main>
    )
}

export default Layout