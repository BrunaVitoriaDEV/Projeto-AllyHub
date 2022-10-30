import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../Components/header/header"
import { goToDestiny } from "../../router/coordenator"
import { Card, ContainerRight, FatherContaine, FatherHome, H1 } from "./styled"


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <FatherHome>
            <Header />
            <FatherContaine>

                <ContainerRight>
                    <Card>
                        <H1>A empresa Nuvens de Sonhos ajuda você a realizar
                            seu sonho de viajar a onde você tiver interesse
                            pesquisamos as melhores empresas de viagens para
                            você receber os melhores preços no seu e-mail.
                            Realize seu sonho, nunca é tarde para desistir.
                        </H1>
                        <button onClick={() => goToDestiny(navigate)}>Quero Viajar!</button>
                    </Card>
                </ContainerRight>

            </FatherContaine>
        </FatherHome>
    )
}

export default HomePage