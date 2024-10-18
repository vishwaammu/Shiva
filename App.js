import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
    <div className = "header">
       
            <div className = "logo-container">
                <img className="Logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Abouit Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
    </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">,
            <Header />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
