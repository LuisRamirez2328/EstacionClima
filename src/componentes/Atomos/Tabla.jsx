import React from 'react';
import styled from 'styled-components';
import Soleado from "../../assets/Img/Soleado.png" 
import Nublado from "../../assets/Img/lluvioso.png"
import Casisoleado from "../../assets/Img/nube.png";
import Nube from "../../assets/Img/nube.png";
const Image = styled.img`
  width: 30%;
  height: 30%;
`;

const Table = styled.table`
  width: 30%;
`;

const Th = styled.th`
  background-color: #007bff;
  color: white;
`;

const Td = styled.td`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  color: white;
`;

const Tabla = ({ datos }) => {
  const getImageByTemperature = (temperature) => {
    if (temperature >= 25) {
      return Soleado;
    } else if (temperature >= 15) {
      return Casisoleado;
    } else if (temperature >= 5) {
      return Nublado;
    } else {
      return Nube;
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Fecha</Th>
            <Th>Temperatura</Th>
            <Th>Descripción</Th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              <Td>{item.fecha}</Td>
              <Td>{item.temperatura}°</Td>
              <Td>
                <Image src={getImageByTemperature(item.temperatura)} alt={item.descripcion} />
                {item.descripcion}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;