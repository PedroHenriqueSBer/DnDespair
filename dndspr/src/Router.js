import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Pdfs from './Components/pdfs/Pdfs'
import Home from "./Components/Home/Home";
import Itens from "./Components/Itens/Itens";
import New from "./Components/New/New";
export default _ =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="pdfs" element={<Pdfs />} />
                <Route path="Itens" element={<Itens />} />
                <Route path="NewIten" element={<New type={1} />} />
            </Route>
            
        </Routes>
    </BrowserRouter>