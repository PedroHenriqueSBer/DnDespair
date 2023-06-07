import ReactDOM from 'react-dom/client';
import './Style.css';
import Pdfs from './Components/pdfs/Pdfs';
import Header from './Components/Default/Header/Header';
import SideBar from './Components/Default/Sidebar/SideBar';
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Header/>
        <Pdfs/>
        <SideBar/>
    </>
    
);