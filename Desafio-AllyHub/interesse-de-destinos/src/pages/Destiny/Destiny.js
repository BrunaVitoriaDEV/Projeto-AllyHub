import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react"
import Header from "../../Components/header/header"
import * as yup from "yup";
import { cpf } from "cpf-cnpj-validator";
import Select from "react-select";
import makeAnimated from "react-select/animated";


const Destiny = () => {
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
        estado: yup
            .string()
            .required("Estados")
    });
    const options = [
        { value: "produto 01", label: "Produto 01" },
        { value: "produto 02", label: "Produto 02" },
        { value: "produto 03", label: "Produto 03" },
        { value: "produto 04", label: "Produto 04" },
        { value: "produto 05", label: "Produto 05" },
        { value: "produto 06", label: "Produto 06" },
        { value: "produto 07", label: "Produto 07" },
        { value: "produto 08", label: "Produto 08" },
    ];
    const animatedComponents = makeAnimated();

    return (
        <Formik
            initialValues={{ email: "", CPF: "", fone: "", name: "" }}
            validationSchema={validationSchema}
        >
            <div>
                <Header />
                <div>
                    <div>
                        <h1>Dados pessoais:</h1>
                        <Form >
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
                            <div>
                                <Select required
                                    name="estado"
                                    placeholder="Estados"
                                    defaultValue={[options[0], options[2]]}
                                    components={animatedComponents}
                                    isMulti
                                    options={options}
                                    className={Field}
                                    isClearable={true}
                                    isSearchable={true}
                                    isDisabled={false}
                                    isLoading={false}
                                    isRtl={false}
                                    closeMenuOnSelect={false}
                                />
                                <ErrorMessage component="estado" name="estado" />
                            </div>
                            <div>
                                <Select required
                                    name="cidades"
                                    placeholder="Cidades"
                                    defaultValue={[options[0], options[2]]}
                                    components={animatedComponents}
                                    isMulti
                                    options={options}
                                    className={Field}
                                    isClearable={true}
                                    isSearchable={true}
                                    isDisabled={false}
                                    isLoading={false}
                                    isRtl={false}
                                    closeMenuOnSelect={false}
                                />
                                <ErrorMessage component="estado" name="estado" />
                            </div>


                            <button type="submit">Submit</button>
                        </Form>
                    </div>
                    <div>
                        <h2>Viagem desejada:</h2>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

export default Destiny