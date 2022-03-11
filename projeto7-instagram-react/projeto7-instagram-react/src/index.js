import ReactDOM from "react-dom";

import barraTopo from "./barraTopo";
import navBar from "./navBar"
// implemente a página utilizando as funções do react

const nav = navBar();
const barra = barraTopo();
const elemento = document.querySelector(".root");
ReactDOM.render(nav,barra, elemento);

