import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Pdfs from './Components/pdfs/Pdfs'
import Home from "./Components/Home/Home";
export default _ =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="pdfs" element={<Pdfs />} />
            </Route>
        </Routes>
    </BrowserRouter>