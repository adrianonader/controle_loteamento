import React, { useEffect, useState } from "react";
import {
  Form,
  Container,
  FormControl,
  FormSelect,
  FormLabel,
} from "react-bootstrap";
import "./CadastroLotes.css";

function CadastroLotes(props) {
  const [formValores, setformValores] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setformValores({ ...formValores, [name]: value });
  };

  const hanldeSubimit = (e) => {
    e.preventDefault();
    props.addLote(formValores);
    // await addDoc(lotesCollectionRef, formValores);

    //const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
  };

  return (
    <div>
      <Container>
        <h2 className="titulo">Cadastro de lote</h2>
        <Form onSubmit={hanldeSubimit} className="form-cadastro-loteamento">
          <div>
            <FormLabel id="loteamento">Selecione o loteamento:</FormLabel>
            <FormSelect onChange={handleInputChange}>
              {props.loteamentos.map((e) => (
                <option value={e.nome} key={e.nome}>
                  {e.nome}
                </option>
              ))}
            </FormSelect>
          </div>

          <div className="corpo-form">
            <FormControl
              name="cadmunicipal"
              id="standard-basic"
              label="Cadastro Municipal"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
            />

            <FormControl
              id="standard-basic"
              label="Quadra"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="quadra"
            />
            <FormControl
              id="standard-basic"
              label="Lote"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="lote"
            />
          </div>
          <div className="corpo-form">
            <FormControl
              id="standard-basic"
              label="Endereço"
              variant="standard"
              required
              className="field-cadmun"
              fullWidth={true}
              margin="normal"
              onChange={handleInputChange}
              name="endereco"
            />
            <div className="corpo-form2">
              <FormControl
                id="standard-basic"
                label="Número"
                variant="standard"
                required
                className="field-cadmun"
                margin="normal"
                onChange={handleInputChange}
                name="numero"
              />
            </div>
          </div>
          <div className="corpo-form">
            <FormControl
              id="standard-basic"
              label="Área total - m²"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="areatotal"
            />

            <FormControl
              id="standard-basic"
              label="Frente - m"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="frente"
            />
            <FormControl
              id="standard-basic"
              label="Laterais - m"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="laterais"
            />
          </div>
          <div className="corpo-form">
            <FormControl
              id="standard-basic"
              label="Matrícula"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              name="matricula"
              onChange={handleInputChange}
            />
            <FormControl
              id="standard-basic"
              label="Cartório"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              name="cartorio"
              onChange={handleInputChange}
            />
            <FormControl
              id="standard-basic"
              label="Valor de venda - R$"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="valor"
            />
          </div>
          <div className="bt-cadastro">
            <button>Cadastrar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default CadastroLotes;
