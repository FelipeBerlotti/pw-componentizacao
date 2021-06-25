import './App.css'

import React from 'react'

import Contador from './components/ContadorCompleto'
import Card from './components/layout/Card';

export default () => (

  <div className="App">
    <h1>Contador</h1>

    <div className="Cards">

    <Card titulo="Contador componentizado" color="#02044f">
      <Contador numeroInicial= {10} />
    </Card>

    </div>
  </div>
);