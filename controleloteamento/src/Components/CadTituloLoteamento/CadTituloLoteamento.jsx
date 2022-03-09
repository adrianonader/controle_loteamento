import React, { useState } from "react";
import { Form, Container, FormControl } from "react-bootstrap";

function CadTituloLoteamento(props) {
  const [formValores, setformValores] = useState();
  const handleInputChange = (e) => {
    const valor = e.target.value;

    setformValores(valor);
    console.log(valor);
  };

  const handleSubimit = (e) => {
    e.preventDefault();
    props.addLoteamento(formValores);
  };

  return (
    <div>
      <Form onSubmit={handleSubimit}>
        <Container maxWidth="sm">
          <div>
            <FormControl
              name="cadloteamento"
              id="standard-basic"
              label="Nome do Loteamento"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
            />
          </div>
          <button>Cadastrar</button>
        </Container>
      </Form>
    </div>
  );
}

export default CadTituloLoteamento;
