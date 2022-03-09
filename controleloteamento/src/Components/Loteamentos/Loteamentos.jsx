import * as React from "react";
import { Table } from "react-bootstrap";
import { Tituloh2, SquareQuadra } from "./LoteamentoStyle";
function Loteamentos(props) {
  return (
    <div>
      <Tituloh2>Loteamento Debortole</Tituloh2>

      <SquareQuadra>
        <p>Quadra</p>NO.22.12.11
      </SquareQuadra>

      <Table size="sm">
        <thead>
          <tr>
            <th align="left">Terrenos</th>
            <th align="right">Quadra</th>
            <th align="right">Lote</th>
            <th align="right">Área m²</th>
            <th align="right">Valor</th>
          </tr>
        </thead>
        <tbody>
          {props.adicionarLote.map((lote) => (
            <tr key={lote.id}>
              <td component="th" scope="row">
                {lote.cadmunicipal}
              </td>
              <td align="right">{lote.frente}</td>
              <td align="right">{lote.lote}</td>
              <td align="right">{lote.area}</td>
              <td align="right">{lote.valor}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Loteamentos;
