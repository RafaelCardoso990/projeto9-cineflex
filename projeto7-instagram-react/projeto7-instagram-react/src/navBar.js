import usuario from './Images/rafael.jpg'
import usuario2 from './Images/lovelace.jpg'
import usuario3 from './Images/alanturing.jpg'
import usuario4 from './Images/John-McCarthy.jpg'
import usuario5 from './Images/george-boole.jpg'
import usuario6 from './Images/charles-babbage.jpg'


function UsuarioNavBar(props){
    return(
     
        
        <div class="sujestoes-para">
                <div>
                    <p class="p1"><b>{props.nomelog}</b></p>
                    <p class="p2">{props.nome}</p>
                </div>
                <div class="sugestoes-ali">
                    <div class="usuario">
                        <img src={props.img2}/>
                        <div class="nomes">
                        <p class="p1"><b>{props.nomeLog2}</b></p>
                        <p class="p2">{props.nome2}</p>
                        </div>  
                    </div>
                    <div>
                        <p class="p3"><b>Seguir</b></p>
                    </div>
                </div>
            </div>

         
    )
}
export default function NavBar(){
    const usuarios = [{img2: usuario2, nomeLog2:'lovelace', nome2:'Ada Lovelace'},
                      {img2: usuario3, nomeLog2:'alanturing', nome2:'Alan Turing'}, 
                      {img2: usuario4, nomeLog2:'John-McCarthy', nome2:'Jhon McCarthy'},
                      {img2: usuario5, nomeLog2:'george-boole', nome2:'George Boole'}, 
                      {img2: usuario6, nomeLog2:'charles-babbage', nome2:'Charles Babbage'}
    ]
    return(
        <div class="side-bar">


            <div class="usuario">
                <img src={usuario}/>
                <div class="nomes">
                <UsuarioNavBar nomelog="Rafiinhacardoso" nome="Rafael Cardoso"/>
                </div>  
            </div>

            <div class="sujestoes">
                <p class="p2">Sugestões para você</p>
                <p class="p1"><b>Ver tudo</b></p>
            </div>   
            <div>
                {usuarios.map(usuarios => <UsuarioNavBar img2={usuarios.img2} nomeLog2={usuarios.nomeLog2} nome2={usuarios.nome2}/>)}
            </div>
            
            <div class="p4"><p class="p4">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</p></div>
            <div class="p4"><p class="p4"> &copy; 2022 INSTAGRAM FROM RAFAEL</p></div>
        
        </div>

    )
}