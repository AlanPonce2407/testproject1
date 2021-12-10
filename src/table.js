import React from "react";
import { Table } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div className="formAlign">
        <Table
          bordered
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.2)",
            margin: "0 auto",
            width: "60%",
          }}
        >
          <thead>
            <tr>
              <th className={"w-25"}>Servicio</th>
              <th className={"w-25"}>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electricidad</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Electrónica</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Pilar</td>
              <td>100</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
