const Controles = ({ onGol, onTarjetaAmarilla}) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local') }}>⚽ Gol</button>
        <button onClick={() => {onTarjetaAmarilla('local')}}>🟨 Amarilla</button>
        <button>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={() => {onTarjetaAmarilla('visitante') }}>🟨 Amarilla</button>
        <button>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles