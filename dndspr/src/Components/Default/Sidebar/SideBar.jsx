import './SideBar.css';
import { Link } from "react-router-dom";
export default _ =>
    <div id='sidebar'>
        <div className='ContentSidebar'>
            <Link to='/'><img src="./images/Icon.png" alt="" /></Link>
            <Link className='link' to='/'><button>Home</button></Link>
            <Link className='link' to='/pdfs'><button>Pdfs</button></Link>
            <div className='Dropdawn'>
                <div> <span> Fichas </span></div>
                <Link className='link' to='/NewSheet'><button>Criar Ficha</button></Link>
                <button>Importar Ficha</button>
            </div>
        </div>
    </div>