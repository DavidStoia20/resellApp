import logo from "../images/logo.jpg";
import Light_DarkTheme from "./Light_DarkTheme.jsx";
import Search from "./Filter.jsx";

export default function Header(props) {
  return (
    <>
      <nav id="navbar">
        <img id="logo" src={logo} alt="" />
        <Search setResults={props.setResults} />
        <button id="cart-button">Cart (0)</button>
        <Light_DarkTheme />
      </nav>
    </>
  );
}
