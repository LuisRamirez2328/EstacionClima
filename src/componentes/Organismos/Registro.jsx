import React from "react";
import "../../assets/Styles/Registro.css"
import Nube from "../../assets/Img/nube.png"

import { Link } from "react-router-dom";
import BotonRegister from "../Atomos/BotonRegister";
const Registrarte = () => {
  return (
    <>

<div className="Fondo">
    
    <Link to="/">
              <BotonRegister>Regresar</BotonRegister>
            </Link>

   <div className="image-corner1">
          <img src={Nube} alt="Imagen 1" />
        </div>

          <div className="signupFrm">
    <form action="" className="form">
      <h1 className="title">Registrarte</h1>

      <div className="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" className="label">Nombre</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a"/>
        <label for="" className="label">Apellido</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a"/>
        <label for="" className="label">Correo</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a"/>
        <label for="" className="label">Confirma correo</label>
      </div>

      <input type="submit" className="submitBtn" value="Registrado"/>
    </form>
  </div>
  </div>
    </>
  );
};

export default Registrarte;