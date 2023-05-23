import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    
    width:100%;
    max-width:1280px;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    overflow-y:auto;

    padding-bottom:50px;    
    div{
        max-height:100%;
    }
  
`

export const Title = styled.h1`
    width:100%;
    font-size:35px;
    color:#FFF;
    text-align:center;
    margin-top:30px;
    margin-bottom:30px;
    i{
        position:relative;
        top:8px;
    }

`

export const ImageContainer = styled.div`
  
    max-width:1280px;
    width:100%;

    
    padding:4%;
    display:flex;
    justify-content:center;

    img{
        min-width:300px;
        max-width:100%;
        max-height:100%;
        object-fit:cover;
    }

`

export const ControlsContainer = styled.div`
    padding:2% 8%;
    max-width:100%;
    width:100%;
    display:flex;
    justify-content:center;
    height:100%;
    max-height:10%;
    margin-bottom:50px;
    
    button{
        width:50%;
        padding:1% 0;
        text-align:center;
      
        background-color:#380673;
        border:3px solid #323232;
        color: #fff;
    }

`

export const ButtonGoToImages = styled.div`

    max-width:100%;
    width:100%;
    display:flex;
    justify-content:center;

    max-height:10%;
    margin-bottom:50px;

    button {
        a {
            text-decoration:none;
            color:white;
        }
    }

`


