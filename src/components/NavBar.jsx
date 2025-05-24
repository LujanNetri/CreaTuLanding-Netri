import { BsLink45Deg } from "react-icons/bs";
import CartWidget from "./CartWidget";
import "../css/navBar.css"

export default function NavBar() {
  return (
    <nav>
      <h1>
        <span id="first-letter">M</span>odela
      </h1>
      <div className="list">
        <a href="#">Home</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">About Us</a>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
}