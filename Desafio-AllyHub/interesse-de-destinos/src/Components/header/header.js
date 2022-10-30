import React from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/logo-aviao.png"
import { goHome } from "../../router/coordenator"
import { HeaderN, LogoN } from "./styled"


const Header = () => {
    const navigate = useNavigate()
    return (
       <HeaderN>
        <LogoN onClick={() => goHome(navigate)} src={Logo} alt="Logo de avião da empresa Sonhos de Nuvens"/>
       </HeaderN>
    )
}

export default Header