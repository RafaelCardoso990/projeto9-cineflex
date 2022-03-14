
import foto from './Images/Tim-Berners-Lee.jpg'
import foto2 from './Images/bill.jpg'
import foto3 from './Images/Edsger-Dijkstra.jpg'
import foto4 from './Images/erich.jpg'
import foto5 from './Images/linus-e1604566705851.jpg'
import foto6 from './Images/logo 3.jpg'
import foto7 from './Images/Ken-Thompson-e1604471276270.jpg'
import foto8 from './Images/bomb-a.jpg'
import svg from './Images/chevron-forward-circle.svg'

function FotoStorys(props){
    return(
        <div class="story-container">
            <div class="foto-story">    
                <img src={props.img}/>
            </div>  
            <p>{props.nome}</p>
        </div>    
    )
}

export default function Storys(){
    const storys = [
        {img: foto, nome:"TimeLee7L"},
        {img: foto2, nome:"Bill.win"},
        {img: foto3, nome:"Edsger_Dijkstra"},
        {img: foto4, nome:"Erich_Brendan"},
        {img: foto5, nome:"eulinus"},
        {img: foto6, nome:"chama"},
        {img: foto7, nome:"Ken-Tho"},
        {img: foto8, nome:"chama"}
    ]
    
    return (
        <div class="storys">
                <div class="story-flex">
                    {storys.map(storys => <FotoStorys img={storys.img} nome={storys.nome}/>)}
                </div>   
                <div class="botao">
                  <a href="#"><img src={svg} /></a> 
                </div> 
            </div>
    )
}