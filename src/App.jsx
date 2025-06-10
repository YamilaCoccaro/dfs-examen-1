import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    tarjetaAmarillaLocal: 0,
    tarjetaAmarillaVisitante: 0,
    tarjetaRojaLocal:0,
    tarjetaRojaVisitante:0
  })

  const onGol = (equipo) => {
    if(equipo=='local'){
      setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
    }
    else{
      setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 })
    }
  }
  const onTarjetaAmarilla = (equipo) => {
    if(equipo=='local'){
      setPartido({...partido, tarjetaAmarillaLocal: partido.tarjetaAmarillaLocal+1})
    }
    else{
      setPartido({...partido, tarjetaAmarillaVisitante: partido.tarjetaAmarillaVisitante+1})
    }
  }
  const onTarjetaRoja = (equipo) => {
    if(equipo=='local'){
      setPartido({...partido, tarjetaRojaLocal: partido.tarjetaRojaLocal+1})
    }
    else{
      setPartido({...partido, tarjetaRojaVisitante: partido.tarjetaRojaVisitante+1})
    }
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} onTarjetaAmarilla={onTarjetaAmarilla} onTarjetaRoja={onTarjetaRoja}/>
      <Display partido={partido} />
    </div>
  )
}

export default App
