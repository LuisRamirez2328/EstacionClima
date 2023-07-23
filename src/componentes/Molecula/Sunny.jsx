import sunny from "../../assets/Img/Sun.svg"
import "../../assets/Styles/Sunny.css"
function Sunny() {
    return (  
<>
<div className="container-sunny">
<div>
<img src={sunny} alt="" />
</div>
<div>
<h2>Sunny</h2>
</div>
<div>
<h2>23º</h2>
</div>
</div>
</>
);
}

export default Sunny;