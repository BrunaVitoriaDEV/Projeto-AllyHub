import React from "react"
import Logo from "../../assets/logo-aviao.png"
import { Destiny, HeaderN, LogoN } from "./styled"


const Header = () => {
    return (
       <HeaderN>
        <LogoN src={Logo} alt="Logo de avião da empresa Sonhos de Nuvens"/>
        <Destiny>Sobre</Destiny>
       </HeaderN>
    )
}

export default Header