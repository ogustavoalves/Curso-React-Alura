import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                        <img src='/imgs/fb.png' alt='facebook logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src='/imgs/tw.png' alt='twitter logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src='/imgs/ig.png' alt='facebook logo'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imgs/logo.png' alt='logo da empresa'/>
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape