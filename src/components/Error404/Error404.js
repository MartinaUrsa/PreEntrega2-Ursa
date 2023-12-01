import { useNavigate } from "react-router-dom";
import "./_Error404.scss";


const Error404 = () => {

  const navigate = useNavigate();

  return (
    <div className="error-div">
        <h2 className="error">404 PAGE NOT FOUND</h2>
        <button className="volver" onClick={() => navigate(-1)}>Volver</button>

    </div>
  )
}

export default Error404;