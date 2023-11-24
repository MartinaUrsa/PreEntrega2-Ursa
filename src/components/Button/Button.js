import { Link } from "react-router-dom";
// Style
import "./_Button.scss";

const Button = ({text}) => {
    return (
        <button> <Link to="productos">{text}</Link> </button>
    )
}

export default Button;