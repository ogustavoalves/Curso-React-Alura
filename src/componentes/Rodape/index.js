import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='fundo'></div>
            <div className='imgs'>
                <div className='social'>
                    <img src='/imgs/fb.png' alt='facebook logo'/>
                    <img src='/imgs/tw.png' alt='twitter logo'/>
                    <img src='/imgs/ig.png' alt='instagram logo'/>
                </div>
                <div className='logo'><img src='/imgs/logo.png' alt='facebook logo'/></div>
            </div>
            
        </footer>
    )
}

export default Rodape