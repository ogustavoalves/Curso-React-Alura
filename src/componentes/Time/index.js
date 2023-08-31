import Card from '../Card';
import './Time.css';

const Time = (props) => {

    return (
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Card 
                key={colaborador.nome} 
                nome={colaborador.nome}
                corDeFundo={props.corPrimaria}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time