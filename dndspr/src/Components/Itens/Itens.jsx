import './Itens.css'
import { Link } from "react-router-dom";
export default _ =>
    <>
    <div className='flexCol Content'>
        <div className='Screen'>
            <Link to='/NewIten' ><button>Criar Item</button></Link>
            <button>Importar Item</button>
        </div>
    </div>
    </>