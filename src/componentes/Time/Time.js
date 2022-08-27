import { Colaborador } from '../Colaborador/Colaborador'
import './Time.css'

export const Time = (props) => {

    const corFundo = {backgroundColor:props.corSecundaria}
    const corBloco = {borderColor:props.corPrimaria}

    return(
        (props.colaboradores.length > 0) ? <section className="time" style={corFundo}>
            <h3 style={corBloco}>{props.nome}</h3>
            <div className='colaboradores'>
               {props.colaboradores.map( colaborador => 
               <Colaborador 
                key={colaborador.nome} 
                corDeFundo={props.corPrimaria} 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}>
                </Colaborador>)}
            </div>
        </section>
        : ''
    )
}