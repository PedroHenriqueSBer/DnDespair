import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Pdfs from './Components/pdfs/Pdfs'
import Home from "./Components/Home/Home";
import CreateSheet from "./Components/createSheet/createSheet";
import ImportSheet from "./Components/ImportSheet/ImportSheet";
export default _ =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="pdfs" element={<Pdfs />} />
                <Route path="NewSheet" element={<CreateSheet />} />
                <Route path="ImportSheet" element={<ImportSheet />} />
            </Route>
            
        </Routes>
    </BrowserRouter>