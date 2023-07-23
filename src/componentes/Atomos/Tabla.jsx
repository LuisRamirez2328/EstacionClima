import React from 'react';
import styled from 'styled-components';
import Soleado from "../../assets/Img/Soleado.png" 
import Nube from "../../assets/Img/nube.png"

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

const Tabla = () => {
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
          <tr>
            <Td>2023-07-20</Td>
            <Td>33°</Td>
            <Td>
              <Image src={Soleado} alt="Soleado" />Soleado
            </Td>
          </tr>
          <tr>
            <Td>2023-07-21</Td>
            <Td>20°</Td>
            <Td>
              <Image src={Nube} alt="Nublado" />Parcialmente nublado
            </Td>
          </tr>
         
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;
