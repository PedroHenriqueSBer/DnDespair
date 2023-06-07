import './New.css'
import React from 'react'
export default props => {
    let Forms = [
        {
            type: 1,
            Title: "Nome",
        },
        {
            type: 1,
            Title: "tst",
        }
    ]
    let TextForm = name =>
        <fieldset >
            <legend>{name}</legend>
            <input type="text" />
        </fieldset>
    let NumberForm = name =>
        <fieldset >
            <legend>{name}</legend>
            <input type="number" />
        </fieldset>
    let Create = _ =>
    {
        let aux;
        for (let i = 0; i < Forms.length; i++) {
            aux = TextForm(Forms[i].name)
        }
        return aux;
    }
    return <>
    <div className='flexCol Content'>
        <form action="">
            <Create />
        </form>
    </div>

    </>
}