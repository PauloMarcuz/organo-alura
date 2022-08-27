import './CampoTexto.css'

export const CampoTexto = (props) => {

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return<>
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}></input>
        </div>
    </>
}