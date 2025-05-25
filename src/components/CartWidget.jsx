import React from "react";
import "../css/cartWidget.css";
import { FaShoppingCart } from "react-icons/fa";



export default function CartWidget ()
{
    return (
      <button type="button">
        <FaShoppingCart />
        <span id="counter">0</span>
      </button>
    );
}