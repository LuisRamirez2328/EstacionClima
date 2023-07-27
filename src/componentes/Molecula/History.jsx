import React, { useState } from 'react';/*  la libreria useState me permite  el estado en componentes funcionales */
import Button from "../Atomos/Boton";
import Tabla from "../Atomos/Tabla";

const History = () => {
  /* el sheShowTable es false para  asi actualizar el valor */
  const [showTable, setShowTable] = useState(false);
/* 
  esta se ejecutara cada vez que sheShowTable sea verdadero */
  const handleButtonClick = () => {

    setShowTable(true);
  };

  const datosHistorial = [

    { fecha: '2023-07-22', temperatura: 29, descripcion: 'Soleado' },
    { fecha: '2023-07-23', temperatura: 15, descripcion: 'Casi soleado' },
    { fecha: '2023-07-22', temperatura: 5, descripcion: 'Nublado' },
   
  ];

  return (
    <>
      {/*  se utiliza ! para mostrar diferentes elementos JSX según el valor showTable */}
      {!showTable ? (
        <Button onClick={handleButtonClick}>Historial</Button>
      ) : (
        <>
     {/*    aqui se visualizara todos los datos de historia  */}
          <Tabla datos={datosHistorial} />
          <Button onClick={() => setShowTable(false)}>Ocultar Historial</Button>
        </>
      )}
    </>
  );
};

export default History;
