import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    
    width:100%;
   

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    overflow-y:auto;
    max-height:100vh;

    padding-bottom:50px;    
    
  
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

export const ImagesList = styled.main`

  
    display:flex;
    align-items:center;
    max-width:980px;
    flex-wrap:wrap;
   
    div {
        width:100%;
        display:flex;

        a{
            width:100%;
            height:100%;
            font-size:20px;
            align-self:center;
            
        }
        img {
            width:100px;
            height:100px;
            flex:1;
            object-fit:contain;
            padding-right:10px;
        }
    }

`

export const ButtonGroup = styled.div`

  

    width:100%;
    display:flex;
    justify-content:center;

    max-height:10%;
    margin-bottom:50px;
    span{
        position:relative;
        top:5px;
        color:white;
        padding:0 5px;
        font-size:40px;
    }
    button {
        width:40px;
        padding:8px 0;
        text-align:center;
      
        background-color:#380673;
        border:3px solid #323232;
        color: #fff;
    }

`
