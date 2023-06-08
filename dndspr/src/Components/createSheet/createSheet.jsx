import './createSheet.css'
export default _ =>{
    let Class;
    let Race;
    let Habilidade;
    return<>
        <div className='flexCol Content' >
            <form action="">
                <fieldset>
                    <legend>Nome</legend>
                    <input type="text"/>
                </fieldset>
                <fieldset>
                    <legend>Classe</legend>
                    <select value={Class} >
                        <option value={0}>Bárbaro</option>
                        <option value={1}>Bardo</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Raça</legend>
                    <select value={Race} >
                        <option value={0}>Anão</option>
                        <option value={1}>Anão da colina</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Nivel</legend>
                    <input type="number" min={1} max={20} defaultValue={1}/>
                </fieldset>
                <fieldset>
                    <legend>Xp</legend>
                    <input type="number" min={0} defaultValue={0}/>
                </fieldset>
                <fieldset>
                    <legend>Personalidade</legend>
                    <select value={Class} >
                        <option value={0}>Leal bom</option>
                        <option value={1}>Leal neutro</option>
                        <option value={2}>Leal mal</option>
                        <option value={3}>neutro bom</option>
                        <option value={4}>neutro</option>
                        <option value={5}>neutro mal</option>
                        <option value={6}>Caótico bom</option>
                        <option value={7}>Caótico neutro</option>
                        <option value={8}>Caótico mal</option>
                    </select>
                </fieldset>
                <fieldset className='Stats'>
                    <legend>Status</legend>
                    <div className='Frow'>
                        <div>
                            <h3>Força</h3>
                            <input className='inptn' type="number" min={0} defaultValue={0}/>
                        </div>
                        <div>
                            <span className='Mod'>Modificador: {0}</span>
                        </div>
                        <div>
                            <span className='adv'>Possui vantagem?</span>
                            <input className='inptc' type="checkbox" />
                        </div>
                    </div>
                    <div className='Frow'>
                        <div>
                            <h3>Destreza</h3>
                            <input className='inptn' type="number" min={0} defaultValue={0}/>
                        </div>
                        <div>
                            <span className='Mod'>Modificador: {0}</span>
                        </div>
                        <div>
                            <span className='adv'>Possui vantagem?</span>
                            <input className='inptc' type="checkbox" />
                        </div>
                    </div>
                    <div className='Frow'>
                        <div>
                            <h3>Constituição</h3>
                            <input className='inptn' type="number" min={0} defaultValue={0}/>
                        </div>
                        <div>
                            <span className='Mod'>Modificador: {0}</span>
                        </div>
                        <div>
                            <span className='adv'>Possui vantagem?</span>
                            <input className='inptc' type="checkbox" />
                        </div>
                    </div>
                    <div className='Frow'>
                        <div>
                            <h3>Inteligência</h3>
                            <input className='inptn' type="number" min={0} defaultValue={0}/>
                        </div>
                        <div>
                            <span className='Mod'>Modificador: {0}</span>
                        </div>
                        <div>
                            <span className='adv'>Possui vantagem?</span>
                            <input className='inptc' type="checkbox" />
                        </div>
                    </div>
                    <div className='Frow'>
                        <div>
                            <h3>Sabedoria</h3>
                            <input className='inptn' type="number" min={0} defaultValue={0}/>
                        </div>
                        <div>
                            <span className='Mod'>Modificador: {0}</span>
                        </div>
                        <div>
                            <span className='adv'>Possui vantagem?</span>
                            <input className='inptc' type="checkbox" />
                        </div>
                    </div>
                    <div className='Frow'>
                        <div>
                            <h3>Carisma</h3>
                            <input className='inptn' type="number" min={0} defaultValue={0}/>
                        </div>
                        <div>
                            <span className='Mod'>Modificador: {0}</span>
                        </div>
                        <div>
                            <span className='adv'>Possui vantagem?</span>
                            <input className='inptc' type="checkbox" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className='Substats'>
                    <legend>Foça</legend>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Atletismo</h2>
                    </div>
                </fieldset>
                <fieldset className='Substats'>
                    <legend>Destreza</legend>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Acrobacia</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Furtividade</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Prestigitação</h2>
                    </div>
                </fieldset>
                <fieldset className='Substats'>
                    <legend>Inteligencia</legend>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Arcanismo</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Historia</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Investigação</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Natureza</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Religião</h2>
                    </div>
                </fieldset>
                <fieldset className='Substats'>
                    <legend>Inteligencia</legend>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Instinto</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Domesticar animais</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Medicina</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Percepção</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Sobrevivência</h2>
                    </div>
                </fieldset>
                <fieldset className='Substats'>
                    <legend>Carisma</legend>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Atuação</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Blefe</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Intimidação</h2>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>0</span>
                        <h2>Sobrevivência</h2>
                    </div>
                </fieldset>
                <button>Criar</button>
            </form>
        </div>
    </>
}