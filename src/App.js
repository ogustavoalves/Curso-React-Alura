import { useState } from 'react';
import './App.css';
import Banner from  './componentes/Banner';
import Forumulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  

  return (
    <div className="App">
      <Banner/>
      <Forumulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>
      <Time nome="Dev-ops"/>
      <Time nome="UX e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>

    </div>
  );
}

export default App;
