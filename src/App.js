import {
    ChakraProvider,
    Heading,
    Container,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    InputGroup,
    InputLeftAddon,
    Input
} from "@chakra-ui/react";
import theme from "./theme/index"
import { MdPhoneAndroid } from "react-icons/md"

export default function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Container
                    bg="white"
                    maxW="container.lg"
                    borderRadius="2xl"
                    padding={8}
                    border="1px"
                    borderColor="gray.300"
                    textAlign="center"
                    borderTop="4px"
                    borderTopColor="teal.500"
                    my={6}
                >
                    <Heading size="lg">Personal Information</Heading>
                </Container>
                <Container
                    bg="white"
                    maxW="container.lg"
                    borderRadius="2xl"
                    padding={8}
                    border="1px"
                    borderColor="gray.300"
                    my={6}
                >
                    <FormControl isRequired>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input id="username" type="text" name="username" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="first-name">First Name</FormLabel>
                        <Input id="first-name" type="text" name="firstName" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="last-name">Last Name</FormLabel>
                        <Input id="last-name" type="text" name="lastName" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="contact-no">Contact No.</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="+63" />
                            <Input id="contact-no" type="text" name="contactNo" />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" name="email" />
                    </FormControl>
                </Container>
            </ChakraProvider>
        </>
    )
}