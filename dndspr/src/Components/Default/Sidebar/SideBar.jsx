import './SideBar.css';
import { Link } from "react-router-dom";
export default _ =>
    <div id='sidebar'>
        <div className='ContentSidebar'>
            <Link to='/'><img src="./images/Icon.png" alt="" /></Link>
            <Link className='link' to='/'><button>Home</button></Link>
            <Link className='link' to='/pdfs'><button>Pdfs</button></Link>
            <button>ficha</button>
            <button>Raça</button>
            <button>Classe</button>
            <button>armas</button>
            <button>itens</button>
        </div>
    </div>