import React from "react";
import { NavLink } from "react-router-dom";

const linkCorrente = {
  color: "#027399",
};

const Navegacao = () => {
  return (
    <ul>
      <li>
        <NavLink activestyle={linkCorrente} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activestyle={linkCorrente} to="/frontend">
          Front End
        </NavLink>
      </li>
      <li>
        <NavLink activestyle={linkCorrente} to="/programacao">
          Programação
        </NavLink>
      </li>
      <li>
        <NavLink activestyle={linkCorrente} to="/design">
          Design
        </NavLink>
      </li>
      <li>
        <NavLink activestyle={linkCorrente} to="/catalogo">
          Catalogo
        </NavLink>
      </li>
    </ul>
  );
};

export default Navegacao;
