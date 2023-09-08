import {RiDeleteBack2Line} from 'react-icons/ri' ;
import './Card.css'

const Card = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <RiDeleteBack2Line size={25} className='deletar' onClick={aoDeletar}/>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5> 
            </div>
        </div>
    )
}

export default Card;