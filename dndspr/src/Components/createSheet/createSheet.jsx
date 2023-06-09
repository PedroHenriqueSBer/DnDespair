import './createSheet.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default _ =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    let Class;
    let Race;
    let Habilidade;
    let minmagias = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    let maxmagias = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    return <>     
        <div className='flexCol Content' >
            <div className='tabsdiv'>
                <Box>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Status" {...a11yProps(0)} />
                            <Tab label="Características" {...a11yProps(1)} />
                            <Tab label="Equipamento/magia" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
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
                        </form>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <form>
                            <fieldset>
                                <legend>Caractrísticas de Raça</legend>
                                <button className='add'><AddIcon/> Adicionar</button>
                            </fieldset>
                            <fieldset>
                                <legend>Caractrísticas de Classe</legend>
                                <button className='add'><AddIcon/> Adicionar</button>
                            </fieldset>
                            <fieldset>
                                <legend>Caractrísticas Adicionais</legend>
                                <button className='add'><AddIcon/> Adicionar</button>
                            </fieldset>
                        </form>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <form>
                            <fieldset>
                                <legend>Equipamento</legend>
                                <button className='add'><AddIcon/> Adicionar</button>
                            </fieldset>
                            <fieldset>
                                <legend>Truque
                                    <input type="number" min={0} max={maxmagias[0]} defaultValue={0} setValue={minmagias[0]}/>
                                    <input type="number" min={minmagias[0]} defaultValue={0} setValue={maxmagias[0]}/> slots
                                </legend>
                                <button className='add'><AddIcon/> Adicionar</button>
                            </fieldset>
                        </form>
                    </TabPanel>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Status" {...a11yProps(0)} />
                            <Tab label="Características" {...a11yProps(1)} />
                            <Tab label="Equipamento/magia" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                </Box>
            </div>
        </div>
    </>
}