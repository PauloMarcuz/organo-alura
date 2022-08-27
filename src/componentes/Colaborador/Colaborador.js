import './Colaborador.css'

export const Colaborador = (props) =>{
    return<>
    <div className='colaborador'>
        <div style={{backgroundColor: props.corDeFundo}} className='cabecalho'>
            <img src={props.imagem} alt={props.nome}></img>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>
    </>
}