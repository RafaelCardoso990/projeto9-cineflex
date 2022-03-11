import ReactDOM from "react-dom";
import App from "./App";
// implemente a página utilizando as funções do react
const app = App();

const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);

