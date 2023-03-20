import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboar";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

function App() {
    return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetail />}/>
            <Route exact path="/host" element={<Dashboard />}>
                <Route path="/income" element={<Income />} />
                <Route path="/reviews" element={<Reviews />} />
            </Route>
        </Route>
    </Routes>
)
}

export default App;
