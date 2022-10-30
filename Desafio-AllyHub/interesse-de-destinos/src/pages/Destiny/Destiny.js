import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react"
import Header from "../../Components/header/header"
import * as yup from "yup";
import { cpf } from "cpf-cnpj-validator";
import FixRequiredSelect from "./FixRequiredSelect";
import BaseSelect from "react-select";
import axios from "axios";
import { FatherCards, SectionContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../router/coordenator";



const Destiny = () => {
    const [paisTrip, setPaisTrip] = useState()
    const [cidadeTrip, setCidadeTrip] = useState([])
    const navigate = useNavigate()

    function buscarPais() {
        const url = "https://amazon-api.sellead.com/country"
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setPaisTrip(res.data) // arnazena o valor no meu estado
            }).catch((err) => {
                console.log(err)
            })
    }
    function buscarCidade() {
        const url = "https://amazon-api.sellead.com/city"
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setCidadeTrip(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => { // Usado para o ciclo de vida quando a tela carregar aparecer o componente.
        buscarPais()
        buscarCidade()
    }, [])

    const optionsCountry = paisTrip?.map(item => {
        return {
            label: item.name_ptbr,
            value: item.name_ptbr
        }
    })

    const optionsCity = cidadeTrip?.map(item => {
        return {
            label: item.name_ptbr,
            value: item.name_ptbr
        }
    })

    const onSubmit = (event) => {
        event.preventDefault()

        alert("Informações enviadas")
    }

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required"),
        CPF: yup
            .string()
            .required("CPF is required")
            .test((value) => cpf.isValid(value)),
        fone: yup
            .number("Apenas números")
            .required("Fone is required"),
        name: yup
            .string()
            .required("Name is required"),
    });

    const Select = props => (
        <FixRequiredSelect
            {...props}
            SelectComponent={BaseSelect}
            options={props.optionsCountry || optionsCountry}
        />
    );
    const Select1 = props => (
        <FixRequiredSelect
            {...props}
            SelectComponent={BaseSelect}
            options={props.optionsCity || optionsCity}
        />
    );

    return (
        <Formik
            initialValues={{ email: "", CPF: "", fone: "", name: "", pais: "", cidade: "" }}
            validationSchema={validationSchema}
        >
  
            <div>
                <Header />
                <Form onSubmit={onSubmit} >
                <FatherCards>
                        <SectionContainer>
                            <h1>Dados pessoais:</h1>

                            <div>
                                <Field required name="name" placeholder="name" />
                                <ErrorMessage component="name" name="name" />
                            </div>
                            <div>
                                <Field required type="email" name="email" placeholder="Email" />
                                <ErrorMessage component="div" name="email" />
                            </div>

                            <div>
                                <Field required name="CPF" placeholder="Number CPF" />
                                <ErrorMessage component="div" name="CPF" />
                            </div>
                            <div>
                                <Field required name="fone" placeholder="Telefone" />
                                <ErrorMessage component="fone" name="fone" />
                            </div>


                        </SectionContainer>
                        <SectionContainer>
                            <h2>Viagem desejada:</h2>
                            <div className="form-group">
                                <i className="text-danger">Paises pretendidas</i>
                                <Select multiple isMulti options={optionsCountry} isSearchable required />


                            </div>
                            <div>
                             <i className="text-danger">Cidades pretendidas:</i>
                                <Select1 multiple isMulti options={optionsCity} isSearchable required />
                            </div>

                            <button type="submit">Submit</button>
                            <button onClick={() => goBack(navigate)}>Voltar</button>
                        </SectionContainer>

                </FatherCards>
                                    </Form>
            </div>
        </Formik>
    )
}

export default Destiny