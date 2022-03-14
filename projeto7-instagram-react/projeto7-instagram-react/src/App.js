import BarraTopo from "./barraTopo"
import NavBar from "./navBar"
import Post from "./post"
import Storys from "./storys"




export default function App(){
    return(
        <div className="conteudo">
            <BarraTopo />
            <Storys />
            <NavBar />
            <Post />
        </div>
    )
}