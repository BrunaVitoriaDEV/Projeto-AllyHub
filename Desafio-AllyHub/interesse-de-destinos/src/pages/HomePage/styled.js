import styled from "styled-components";
import backHome from "../../assets/backg-home.jpg"

export const FatherHome = styled.div`
display: grid;
grid-template-rows: 60px 1fr;
`
export const FatherContaine = styled.div`
display: grid;
position: relative;
//grid-template-columns: 50% 50%;
border: solid 1px blue;
height: 1fr;
background-image:  url(${backHome});
>img{
    width: 100%;
}
`
export const Containerleft = styled.div`
display: flex;
align-items: center;
height: 100vh;
text-align: center;
justify-content: center;
font-size: 50px;
color: black;

>h1{
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:blue;
}
`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
height: 100vh;
text-align: center;
justify-content: center;
`
export const Card = styled.div`
display: grid;
grid-column: auto;
width: 400px;
color:white;
align-items: center;
justify-content: center;
padding-bottom: 10px;
border-radius: 5px;
background-color: black;
opacity : 0.7;
>button{
    width: 150px;
    cursor: pointer;
    display: block; margin-left: auto; margin-right: auto
}
` 