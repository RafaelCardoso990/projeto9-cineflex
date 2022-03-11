import foto from './Images/Tim-Berners-Lee.jpg'
import foto2 from './Images/bill.jpg'
import foto3 from './Images/Edsger-Dijkstra.jpg'
import foto4 from './Images/erich.jpg'
import foto5 from './Images/linus-e1604566705851.jpg'
import foto6 from './Images/logo 3.jpg'
import foto7 from './Images/Ken-Thompson-e1604471276270.jpg'
import foto8 from './Images/bomb-a.jpg'
import svg from './Images/chevron-forward-circle.svg'

export default function Storys(){
    return (
        <div class="storys">
                <div class="story-flex">

                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto}/>
                        </div>  
                        <p>TimLee7L</p>
                    </div>    

                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto2}/>
                        </div>  
                        <p>Bill.win</p>
                    </div>   

                    
                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto3} />
                        </div>  
                        <p>Edsger_Dijkstra</p>
                    </div>   


                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto4}/>
                        </div>  
                        <p>Erich_Brendan</p>
                    </div>


                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto5} />
                        </div>  
                        <p>eulinus</p>
                    </div>    


                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto6} />
                        </div>  
                        <p>chama</p>
                    </div>   


                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto7} />
                        </div>  
                        <p>Ken-Tho</p>
                    </div>   
                    
                    
                    <div class="story-container">
                        <div class="foto-story">    
                            <img src={foto8} />
                        </div>  
                        <p>chama</p>
                    </div>         

                </div>   
                <div class="botao">
                  <a href="#"><img src={svg} /></a> 
                </div> 
            </div>
    )
}