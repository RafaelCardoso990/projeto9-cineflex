import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Sucess(){
    return(
        <Main>
            <header>CINEFLIX</header>                        
            <h1>Pedido feito com sucesso!</h1>

            <div className="sucess">
                <h2>Filmes e sessão</h2>

            </div>

            <Link to="/"><button>Voltar para Home</button></Link>
        </Main>    
    )
}

const Main = styled.main`
        width: 100vw;
        height: 100%;
        text-align: center;
        position: relative;

        .sucess > h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            letter-spacing: 0.04em;
            margin-left: 10px;
            color: #293845;
        }

        header{
            width: 100vw;
            height: 67px;
            background-color: #C3CFD9;
            text-align: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 34px;
            line-height: 70px;
            align-items: center;
            text-align: center;
            color: #E8833A;
            position: fixed;
            top: 0px;
           
        }

        h1{
            margin-top: 80px;
            padding: 50px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;            
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            color: #247A6B;
            background-color: #FFFFFF;     

        }

        button{
            width: 225px;
            height: 42px;      
            border: none;
            background: #E8833A;
            border-radius: 3px;
            margin-top: 100px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;         
            letter-spacing: 0.04em;
            color: #FFFFFF;
            margin-bottom: 200px;

        }       
`
