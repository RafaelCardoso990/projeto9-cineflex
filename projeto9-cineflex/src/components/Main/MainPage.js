import { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

export default function MainPage(){
    
    
    const [movies, setMovies] = useState([]);


    useEffect(()=> {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response =>{
            const {data} = response;
            console.log("terminei", data)
            console.log(data)
            setMovies(data);
        })
        promise.catch(err => console.log(err.response))
    },[])

    return (
        <Main>                 
            <Header>CINEFLIX</Header>
            <SubTitle className="sub">Selecione o filme</SubTitle>
            <Content>
                {movies.map(movie => { 
                    const {posterURL, id} = movie;
                    return <Container key={id}><Link to={`/sessoes/${id}`}><Movie src={posterURL}/></Link></Container>
                    })}
            </Content>  
        </Main>
    )
}

const Header = styled.h1`
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
`
const SubTitle = styled.h1`
    padding: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-top: 80px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
    
`
const Main = styled.main`
    width: 100vw;
    height: 100vh;
    text-align: center;
`
const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Container = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-bottom: 3px;
`
const Movie = styled.img`
    width: 129px;
    height: 193px;
`