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
import Tabla from "../Atomos/Tabla"
import { Link } from 'react-router-dom';

function Ladingclima() {
  
  return (
    <>
      <div className="Container-fondo-lading">
        <div className="containe">
          <div className="datos-clima">
            <Link to="/registro">
              <BotonRegister>Registrarse</BotonRegister>
            </Link>
            <div><Title></Title></div>
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
              <History Climas={Tabla}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ladingclima;
