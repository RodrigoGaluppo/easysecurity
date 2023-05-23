import {createGlobalStyle} from "styled-components"
// estilo global
export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }
    body{
        overflow:hidden;
        background-color:#323232;
        color:#000;
        -webkit-font-smoothing:antialiased;
    }
    body,input,button{
        font-family: 'Roboto Slab', serif;
        font-size:16px;
        box-shadow: none;
        outline: none;
        :focus{
            box-shadow: none;
            outline: none;
        }
    }
    button{
        cursor: pointer;
    }
`