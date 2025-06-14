const Display = ({ partido }) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partido.golesLocal}</td>
            <td>{partido.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{partido.tarjetaAmarillaLocal}</td>
            <td>{partido.tarjetaAmarillaVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>{partido.tarjetaRojaLocal}</td>
            <td>{partido.tarjetaRojaVisitante}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display