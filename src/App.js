import {
    ChakraProvider,
    Heading,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputLeftAddon,
    Input,
    VStack,
    Button,
    SimpleGrid
} from "@chakra-ui/react";
import theme from "./theme/index"
import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        username: "",
        firstName: "",
        lastName: "",
        contactNo: "",
        email: ""
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function nextPage() {
        console.log(formData)
    }

    return (
        <>
            <ChakraProvider theme={theme}>
                <VStack spacing={6} align="flex-start">
                    <Container
                        as="header"
                        bg="white"
                        maxW="container.lg"
                        borderRadius="2xl"
                        padding={[5, 8]}
                        border="1px"
                        borderColor="gray.300"
                        textAlign="center"
                        borderTop="4px"
                        borderTopColor="teal.500"
                    >
                        <Heading size={["md", "lg"]}>Personal Information</Heading>
                    </Container>
                    <Container
                        as="form"
                        bg="white"
                        maxW="container.lg"
                        borderRadius="2xl"
                        padding={8}
                        border="1px"
                        borderColor="gray.300"
                    >
                        <SimpleGrid columns={[1, null, 2]} spacingX={8} spacingY={6}>
                            <FormControl isRequired>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input
                                    id="username" type="text" name="username" variant="filled"
                                    onChange={handleChange} valeu={formData.username}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="first-name">First Name</FormLabel>
                                <Input
                                    id="first-name" type="text" name="firstName" variant="filled"
                                    onChange={handleChange} value={formData.firstName}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                                <Input
                                    id="last-name" type="text" name="lastName" variant="filled"
                                    onChange={handleChange} value={formData.lastName}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="contact-no">Contact No.</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children="+63" />
                                    <Input
                                        id="contact-no" type="text" name="contactNo" variant="filled"
                                        onChange={handleChange} value={formData.contactNo}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email" type="email" name="email" variant="filled"
                                    onChange={handleChange} value={formData.email}
                                />
                            </FormControl>
                        </SimpleGrid>
                    </Container>
                    <Button colorScheme="teal" onClick={nextPage}>Next</Button>
                </VStack>
            </ChakraProvider>
        </>
    )
}