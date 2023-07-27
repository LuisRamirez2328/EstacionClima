import React from "react";
   
const Historial =({Climas})=>{ /*  aqui se define el componente que es climas para que se renderize  */
return(
<>
<div>
<h2> Historial</h2>
<ul>
{/* usa el map para iterar sobre el array para generar un nuveo */}

{Climas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

</ul>


</div>

</>

)


}
export default Historial;