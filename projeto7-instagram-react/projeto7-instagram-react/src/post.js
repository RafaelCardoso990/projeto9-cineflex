import svg from './Images/ellipsis-horizontal-outline.svg'
import svg2 from './Images/heart-outline.svg'
import svg3 from './Images/chatbubble-outline.svg'
import svg4 from './Images/paper-plane-outline.svg'
import svg5 from './Images/bookmark-outline.svg'
import foto3 from './Images/logo 3.jpg' 
import foto2 from './Images/steve-jobs.jpg'
import jobs from './Images/jobs.jpg'
import bill from './Images/bill.jpg'
import linus from './Images/linus-e1604566705851.jpg'
import linus2 from './Images/js.png'
import jobs2 from './Images/linus-e1604566705851.jpg'
import bill2 from './Images/billgates.jpg'


function Usuario(props){
    return(
        <div className="post">

            <div className="barra-cima-post">
                <div className="foto-barra-post">
                    <div className="usuario2">
                        <img src={props.img} />
                        <p className="p1" ><b>{props.nome}</b></p>
                    </div>
                </div>

                <div className="tres-pontos-barra">
                    <img src={svg}/>
                </div>
            </div>


            <div className="foto-post">
                <img src={props.img2}  />
            </div>

            <div className="barra-baixo-post">               
                    <div className="logos-barra-esquerdo">
                        <a href="#"><img src={svg2} /></a>
                        <a href="#"><img src={svg3}  /></a>
                        <a href="#"><img src={svg4} /></a>
                    </div>
                    
                    <div className="logos-barra-direito">
                        <a href="#"><img src={svg5}  /></a>
                    </div>
            </div>

            

            <div className="foto-barra-post2">
                
                <div className="usuario3">
                    <img src={props.img3} />
                    <div className="nomes">
                        <p className="p5"> Curtido por <strong>{props.nome2}</strong> e outras <b>101.253 pessoas.</b></p>
                    </div>  
                </div>
            </div>
            

        </div>
    )
}

export default function Post(){
    const post = [
        {img: jobs, nome:"Steve Jobs", img2: foto2, nome2:"Chama-Mercados", img3: foto3},
        {img: bill, nome:"Bill Gates", img2: bill2, nome2:"Chama-Mercados", img3: foto3},
        {img: linus, nome:"Linus Torvalds", img2: linus2, nome2:"Chama-Mercados", img3: foto3}
    
    ]
    return(
        <div>
         {post.map(posts => <Usuario img={posts.img} nome={posts.nome} img2={posts.img2} nome2={posts.nome2} img3={posts.img3}/>)}          
        </div>
    )
}

