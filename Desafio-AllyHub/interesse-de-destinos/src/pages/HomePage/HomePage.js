import React from "react"
import Header from "../../Components/header/header"
import { Card, ContainerRight, FatherContaine, FatherHome } from "./styled"


const HomePage = () => {
    return (
       <FatherHome>
        <Header/>
        <FatherContaine>

            <ContainerRight>
                <Card>
                <h3>A empresa Nuvens de Sonhos ajuda você a realizar 
                    seu sonho de viajar a onde você tiver indeteresse 
                    pesquisamos as melhores empresas de viagens para 
                    você receber os melhores preços no seu e-mail. 
                    Realize seu sonho, nunca é tarde para desistir.
                 </h3>
                 <button>Quero Viajar!</button>
                 </Card>
            </ContainerRight>
        </FatherContaine>
       </FatherHome>
    )
}

export default HomePage