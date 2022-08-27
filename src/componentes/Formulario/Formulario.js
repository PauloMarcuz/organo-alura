import {useState} from 'react'

import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return <>
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Preencha os campos abaixo para criar seu Organo</h1>
                <CampoTexto 
                    value={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome">
                </CampoTexto>
                <CampoTexto
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo">
                </CampoTexto>
                <CampoTexto
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    label="Imagem (Opcional)" 
                    placeholder="Digite o endereço da sua imagem">
                </CampoTexto>
                <ListaSuspensa
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}>
                </ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    </>
}