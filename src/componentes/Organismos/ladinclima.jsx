import React, { useState } from 'react';
import moment from 'moment';
import "../../assets/Styles/Ladingclima.css";
import Sunny from "../Molecula/Sunny";
import Cloudy from '../Molecula/Cloudy';
import Rainy from '../Molecula/Rainy';
import Mostry from '../Molecula/Mostry';
import Title from '../Atomos/Titlefecha';
import Grados from '../Atomos/Titlegrados';
import History from '../Molecula/History';
import BotonRegister from '../Atomos/BotonRegister';
import { Link } from 'react-router-dom';

function Ladingclima() {
  const currentDate = moment().format('DD MMMM YYYY');
  const climasArray = [
    { fecha: '2023-07-20', temperatura: '33°', descripcion: 'Soleado' },
    { fecha: '2023-07-21', temperatura: '20°', descripcion: 'Parcialmente nublado' },
    
  ];

  return (
    <>
      <div className="Container-fondo-lading">
        <div className="containe">
          <div className="datos-clima">
            <Link to="/registro">
              <BotonRegister>Registrarse</BotonRegister>
            </Link>
            <div><Title>{currentDate}</Title></div>
            <div><Sunny /></div>
            <div><Cloudy /></div>
            <div><Rainy /></div>
            <div><Mostry /></div>
           
          </div>
          <div className="grados-clima">
            <div>
              <Grados>23ºC</Grados>
            </div>

            <div>
              <p>Suchiapa, Chiapas</p>
            </div>
            <div className="historial-container">
              <History Climas={climasArray} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ladingclima;
