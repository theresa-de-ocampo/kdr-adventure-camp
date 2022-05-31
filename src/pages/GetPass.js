import {
    ChakraProvider,
    VStack
} from "@chakra-ui/react";
import theme from "../theme/index"
import React from "react"
import Headline from "../components/Headline"
import PersonalDetails from "./PersonalDetails"
import UserDetails from "./UserDetails"
import ErrorPage from "./ErrorPage"
import HealthDeclaration from "./HealthDeclaration"
import SuccessPage from "./SuccessPage"
import "../services/utils/validate"

export default function App() {
    const [formData, setFormData] = React.useState({
        page: 1,
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        contactNo: "",
        birthday: "",
        civilStatus: "",
        soreThroat: "n",
        bodyPains: "n",
        headache: "n",
        fever: "n",
        coughsCold: "n",
        dyspnea: "n",
        diarrhea: "n",
        workplaceWithCovid: "n",
        contactWithSymptoms: "n",
        internationalTravel: "n",
        ncrTravel: "n",
        pwd: "n",
        pregnant: "n",
        agree: false
    })

    function nextPage() {
        setFormData(prevFormData => {
            console.log("nextPage")
            return {
                ...prevFormData,
                page: prevFormData.page + 1
            }
        })
    }

    function prevPage() {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                page: prevFormData.page - 1
            }
        })
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    let page, title;
    switch(formData.page) {
        case 1:
            title = "Account Information"
            page =
                <UserDetails
                    formData={formData}
                    handleChange={handleChange}
                    nextPage={nextPage}
                />
            break
        case 2:
            title = "Personal Information"
            page =
                <PersonalDetails
                    formData={formData}
                    handleChange={handleChange}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            break
        case 3:
            title = "Health Declaration"
            page =
                <HealthDeclaration
                    formData={formData}
                    handleChange={handleChange}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            break
        case 4:
            title = "You have successfully registered!"
            page = <SuccessPage formData={formData} />
            break
        default:
            page = <ErrorPage />
    }

    return (
        <>
            <ChakraProvider theme={theme}>
                <VStack spacing={6} align="flex-start">
                    <Headline title={title} />
                    {page}
                </VStack>
            </ChakraProvider>
        </>
    )
}