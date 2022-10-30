import styled from "styled-components";
import BackDestiny from "../../assets/back-destiny.jpg"





     

export const FatherCards = styled.main`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
justify-items: center; 
width: 100%;
overflow-y: hidden;
background-image: url(${BackDestiny});
height: 100vh;

@media screen and (min-device-width : 270px) and (max-device-width : 700px) {
display: grid;
grid-template-rows: 50% 50%;
justify-items: center; 

}

`
export const SectionContainer = styled.section`
width: 300px ;
background: rgba(255,255,255,.7);
height: 300px;
border-radius: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,.5);
margin: 5%;
display: grid;
border: solid 3px white;
align-items: center;
justify-content: center;
@media screen and (min-device-width : 270px) and (max-device-width : 700px) {
width: 280px;

}
`