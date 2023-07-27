import React from "react";
import "../../assets/Styles/Registro.css"
import Nube from "../../assets/Img/nube.png"
import { useRef } from "react";

import { Link } from "react-router-dom";
import BotonRegister from "../Atomos/BotonRegister";
const Registrarte = () => {
/*   Se declara una variable datosform utilizando el hook useRef().
   El propósito de esto es almacenar una referencia al formulario 
   del cual se recopilarán los datos más adelante. */
let datosform = useRef();
/* la funcion es que hara un post cada vez que de un clic en el boton */
  const handlerClick = (e) => {
    /* es para evitar que realice una solicitud de http convencional  */
    e.preventDefault();
 /*    Esto se hace utilizando la referencia del formulario que se obtiene a través de datosform.current. */
    const newButton = new FormData(datosform.current);
    /* se define el objeto correo para ya que esto sera la peticion post */
    let correo = {
      method: "POST",
      headers: {
        "Contet-Type": "application/json",

      },
      body: JSON.stringify({
        correo: newButton.get("correo")
      })
    };
   /*  se usa el fetch para enviar la solicitud de post al servidor y se especifica el objeto   */
    fetch("http://54.234.241.63:3000/topic/email", correo)
      .then(response => response.json()) /* manda la solictud  */
      .then(data => {
        /* procesar la respuesta como tipo JSON */
        alert(JSON.stringify(data))
      });
  };
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
          <form action="" className="form " ref={datosform}>
            <h1 className="title">Registrarte</h1>

            <div className="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" className="label">Nombre</label>
            </div>

            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label for="" className="label">Apellido</label>
            </div>

            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label for="" className="label">Correo</label>
            </div>

            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label for="" className="label">Confirma correo</label>
            </div>

            <button className="submitBtn" onClick={handlerClick}>Registrado</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registrarte;