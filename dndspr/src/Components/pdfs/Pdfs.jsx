import './Pdfs.css'
export default _ =>
    <div className='flexCol Content'>
        <div className='pdfsgrid'>
            <a href="./pdfs/MM.pdf" target="_blank">
                <div className='card'>
                    <h1>Manual dos monstros</h1>
                    <img src="./images/MM.png" alt="" />
                </div>
            </a>
            <a href="./pdfs/Ldj.pdf" target="_blank">
                <div className='card'>
                    <h1>Livro do jogador</h1>
                    <img src="./images/LDJ.png" alt="" />
                </div>
            </a>
            <a href="./pdfs/GM.pdf" target="_blank">
                <div className='card'>
                    <h1>Guia do mestre</h1>
                    <img src="./images/GM.png" alt="" />
                </div>
            </a>
        </div>

    </div>