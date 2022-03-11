
import Logo from './Images/logo.png'
import LogoInsta from './Images/logo-instagram.svg'
import Paper from './Images/paper-plane-outline.svg'
import Compass from './Images/compass-outline.svg'
import Heart from './Images/heart-outline.svg'
import Person from './Images/person-outline.svg'

export default function BarraTopo(){
    return (
     <div className="barra-topo">
          <img className="maquina" src={LogoInsta}/>
  
  
          <div className="separador-vertical-barra"></div>
  
          
          <div className="pesquisa">
              <img className="logo-insta" src={Logo}/> 
  
              <input className="caixa-pesquisa" type="text" placeholder="Pesquisar"/>
  
              <div className="quatro-items">
                  <img className="item1" src={Paper}/>
                  <img className="item1" src={Compass}/>
                  <img className="item1" src={Heart}/>
                  <img className="item1" src={Person}/>
              </div>
          </div>
  
      </div>
    )
  }