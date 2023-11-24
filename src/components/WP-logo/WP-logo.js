import "./_WP-logo.scss";

import WpLogo from "./whatsapp.svg";

const WPLogo = () => {
    return (
        <a href="https://api.whatsapp.com/send/?phone=5491150055200&text&type=phone_number&app_absent=0" target="_blank"><img className="whatsapp-logo" src={WpLogo} alt=""/></a>
    )
}

export default WPLogo;