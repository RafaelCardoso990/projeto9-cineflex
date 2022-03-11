import usuario from './Images/rafael.jpg'
import usuario2 from './Images/lovelace.jpg'
import usuario3 from './Images/alanturing.jpg'
import usuario4 from './Images/John-McCarthy.jpg'
import usuario5 from './Images/george-boole.jpg'
import usuario6 from './Images/charles-babbage.jpg'

export default function NavBar(){
    return (
        <div class="side-bar">


            <div class="usuario">
                <img src={usuario}/>
                <div class="nomes">
                <p class="p1"><b>rafiinha_cardoso</b></p>
                <p class="p2">Rafael Cardoso</p>
                </div>  
            </div>

            <div class="sujestoes">
                <p class="p2">Sugestões para você</p>
                <p class="p1"><b>Ver tudo</b></p>
            </div>

            <div class="sujestoes-para">

                <div class="sugestoes-ali">
                    <div class="usuario">
                        <img src={usuario2}/>
                        <div class="nomes">
                        <p class="p1"><b>Only0Love</b></p>
                        <p class="p2">Ada Lovelace</p>
                        </div>  
                    </div>
                    <div>
                        <p class="p3"><b>Seguir</b></p>
                    </div>
                </div>

               
                <div class="sugestoes-ali">
                    <div class="usuario">
                        <img src={usuario3}/>
                        <div class="nomes">
                        <p class="p1"><b>Alan_turing12</b></p>
                        <p class="p2">Alan Turing</p>
                        </div>  
                    </div>
                    <div>
                        <p class="p3"><b>Seguir</b></p>
                    </div>
                </div>
              
                <div class="sugestoes-ali">
                    <div class="usuario">
                        <img src={usuario4}/>
                        <div class="nomes">
                        <p class="p1"><b>John_McCarthy001</b></p>
                        <p class="p2">John McCarthy</p>
                        </div>  
                    </div>
                    <div>
                        <p class="p3"><b>Seguir</b></p>
                    </div>
                </div>
              
                <div class="sugestoes-ali">
                    <div class="usuario">
                        <img src={usuario5}/>
                        <div class="nomes">
                        <p class="p1"><b>george-boole</b></p>
                        <p class="p2">George Boole</p>
                        </div>  
                    </div>
                    <div>
                        <p class="p3"><b>Seguir</b></p>
                    </div>
                </div>
         
                <div class="sugestoes-ali">
                    <div class="usuario">
                        <img src={usuario6}/>
                        <div class="nomes">
                        <p class="p1"><b>charles01babbage</b></p>
                        <p class="p2">Charles Babbage</p>
                        </div>  
                    </div>

                    <div>
                        <p class="p3"><b>Seguir</b></p>
                    </div>
                    
                </div>
            </div>

            <div class="p4"><p class="p4">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</p></div>
            <div class="p4"><p class="p4"> &copy; 2022 INSTAGRAM FROM RAFAEL</p></div>
            
        </div>

    )
}