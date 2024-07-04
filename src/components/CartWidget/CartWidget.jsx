import logo from "../../assets/react.svg";
import React from "react";

function CartWidget({ cartCount }) {
    return (
        <a className="nav-link" href="#">
            <img src={logo} />
            {cartCount}
        </a>
    );
}
export default CartWidget;