import Card from '../Card';
import './Time.css';

const Time = (props) => {

    return (
        <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <input type='color' className='input-color'/>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Card key={colaborador.nome} 
                        nome={colaborador.nome} 
                        corDeFundo={props.corPrimaria} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time