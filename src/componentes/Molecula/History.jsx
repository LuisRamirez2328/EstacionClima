import React, { useState } from 'react';
import Button from "../Atomos/Boton";
import Tabla from "../Atomos/Tabla";

const History = () => {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(true);
  };

  const datosHistorial = [
    { fecha: '2023-07-22', temperatura: 29, descripcion: 'Soleado' },
    { fecha: '2023-07-23', temperatura: 15, descripcion: 'Casi soleado' },
    { fecha: '2023-07-22', temperatura: 5, descripcion: 'Nublado' },
    // Agrega más datos para fechas futuras aquí...
  ];

  return (
    <>
      {/* Mostrar el botón si showTable es falso, de lo contrario mostrar la tabla */}
      {!showTable ? (
        <Button onClick={handleButtonClick}>Historial</Button>
      ) : (
        <>
          <Tabla datos={datosHistorial} />
          <Button onClick={() => setShowTable(false)}>Ocultar Historial</Button>
        </>
      )}
    </>
  );
};

export default History;
