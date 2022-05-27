import {
    ChakraProvider,
    Container,
    VStack,
    HStack,
    Button
} from "@chakra-ui/react";
import theme from "../theme/index"
import React from "react"
import Headline from "../components/Headline"
import PersonalDetails from "./PersonalDetails"
import UserDetails from "./UserDetails"
import ErrorPage from "./ErrorPage";
import HealthDeclaration from "./HealthDeclaration";

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
        civilStatus: ""
    })
    console.log(formData)

    function nextPage() {
        setFormData(prevFormData => {
            console.log(prevFormData.page)
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
                    nextPage={prevPage}
                />
            break
        case 3:
            title = "Health Declaration"
            page =
                <HealthDeclaration
                    formData={formData}
                    handleChange={handleChange}
                    prevPage={prevPage}
                />
            break
        default:
            page = <ErrorPage />
    }

    return (
        <>
            <ChakraProvider theme={theme}>
                <VStack spacing={6} align="flex-start">
                    <Headline title={title} />
                    <Container
                        as="form"
                        bg="white"
                        maxW="container.lg"
                        borderRadius="2xl"
                        padding={8}
                        border="1px"
                        borderColor="gray.300"
                    >
                        {page}
                    </Container>
                    <HStack>
                        {
                            formData.page !== 1 &&
                            <Button colorScheme="teal" onClick={prevPage}>Back</Button>
                        }
                        {
                            formData.page !== 3 &&
                            <Button colorScheme="teal" onClick={nextPage}>Next</Button>
                        }
                    </HStack>
                </VStack>
            </ChakraProvider>
        </>
    )
}