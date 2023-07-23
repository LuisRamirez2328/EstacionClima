import React, { useState } from 'react';
import Button from "../Atomos/Boton";
import Tabla from "../Atomos/Tabla";

const History = () => {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(true);
  };

  return (
    <>
      {!showTable ? (
        <Button onClick={handleButtonClick}>Historial</Button>
      ) : (
        <>
          <Tabla />
          <Button onClick={() => setShowTable(false)}>Ocultar Historial</Button>
        </>
      )}
    </>
  );
};

export default History;
