import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"



export default function Movie(){
    const {idFilme} = useParams();
    console.log(idFilme)
    const [sections, setSections] = useState([])
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then(response => {
            const {data} = response
            setSections(data)
        })
        promise.catch((err) => {
            console.log(err);
        })
        
    },[])
    
    const {title,posterURL} = sections;
    const {days} = sections
    console.log(days)

    return days != undefined ? (
        <Main>               
            <header>CINEFLIX</header>
            
            <h1>Selecione o horário</h1>

            <div>
                {sections.days.map((day)=> {      
                    return( 
                    <Day  weekday={day.weekday} 
                        date={day.date} 
                        time={times(day.showtimes)}
                />)              
                })}        
            </div>   

            <footer><div className="box-footer"><img src={posterURL}/></div><h2>{title}</h2></footer>
        </Main>
    ) : <></>
}

function Day(props){
    return(
        <>
            <h4>{props.weekday}-{props.date}</h4>
            <h3>{props.time}</h3>
        </>
    )
}

function times(showtimes){
    return(
        <>
            {showtimes.map((time) =>{
                return <Link to={`/assentos/${time.id}`}><h5>{time.name}</h5></Link>
                
            })}
        </>
    )
}


 const Main = styled.main`
        width: 100vw;
        height: 100%;
        text-align: center;
        position: relative;

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
            font-size: 20px;
            line-height: 28px;            
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            color: #293845;
            background-color: #FFFFFF;     

        }

        div{           
            margin-left: 10px;
            padding-bottom: 20px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: 0.02em;
            color: #293845; 
            margin-bottom: 100px;
        }
        
        footer{
            width: 100%;
            height: 120px;
            display: flex;
            justify-content: start;
            align-items: center;
            background-color: #DFE6ED;
            position: fixed;
            bottom: 0px;
        }
        
        .box-footer{
            width: 64px;
            height: 89px;
            background: #FFFFFF;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
        }

        img{
            width: 48px;
            height: 72px;
        }

        h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: #293845;
        }

        h4{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: #293845;
            margin-bottom: 23px;   
        }

        h3{
            display: flex;
            justify-content: start;
            align-items: space-around;
            margin-bottom: 23px;   
        }

        h5{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #E8833A;
            margin-right: 10px;
            width: 83px;
            height: 43px;
            background: #E8833A;
            border-radius: 3px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }

`       
  