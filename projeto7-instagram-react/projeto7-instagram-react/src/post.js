import foto from './Images/jobs.jpg'
import svg from './Images/ellipsis-horizontal-outline.svg'
import foto2 from './Images/steve-jobs.jpg'
import svg2 from './Images/heart-outline.svg'
import svg3 from './Images/chatbubble-outline.svg'
import svg4 from './Images/paper-plane-outline.svg'
import svg5 from './Images/bookmark-outline.svg'
import foto3 from './Images/logo 3.jpg'



export default function Post(props){
    return(
        <div class="post">
            <div class="barra-cima-post">

                <div class="foto-barra-post">
                    <div class="usuario2">
                        <img src={foto} />
                        <div class="nomes">
                        <p class="p1" ><b>{props.nome}</b></p>
                        </div>  
                    </div>
                </div>

                <div class="tres-pontos-barra">
                    <img src={svg}/>
                </div>

            </div>


            <div class="foto-post">
                <img src={foto2}  />
            </div>

            <div class="barra-baixo-post">

               
                    <div class="logos-barra-esquerdo">
                        <a href="#"><img src={svg2} /></a>
                        <a href="#"><img src={svg3}  /></a>
                        <a href="#"><img src={svg4} /></a>
                    </div>
                    
                    <div class="logos-barra-direito">
                        <a href="#"><img src={svg5}  /></a>
                    </div>


            </div>

            

                <div class="foto-barra-post2">
                    
                    <div class="usuario3">
                        <img src={foto3} />
                        <div class="nomes">
                        <p class="p5"> Curtido por <strong>Chama-Mercados</strong> e outras <b>101.253 pessoas.</b></p>
                        </div>  
                    </div>

                </div>
            

        </div>
        
        

        
     
    )
}

