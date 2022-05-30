import { Container, SimpleGrid, FormControl, FormLabel, Input, FormErrorMessage, HStack, Button } from "@chakra-ui/react"
import React from "react"

export default function UserDetails(props) {
    const [errors, setFormErrors] = React.useState({
        usernameEmpty: false,
        emailEmpty: false,
        emailInvalid: false,
        passwordEmpty: false,
        passwordNotStrong: false,
        confirmPasswordEmpty: false,
        confirmPasswordDoesNotMatch: false
    })
    console.log(errors)

    function setError(key, value) {
        setFormErrors(prevErrors => {
            return {
                ...prevErrors,
                [key]: value
            }
        })
    }
    
    function handleValidation() {
        if (!props.formData.username)
            setError("usernameEmpty", true)
        else
            setError("usernameEmpty", false)

        console.log(Object.values(errors))
        return Object.values(errors).some(error => error == true)
    }

    function handleNextPage() {
        let withErrors = handleValidation()
        console.log(withErrors)
        /* if (!withErrors)
            props.nextPage() */
    }

    return (
        <>
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
                    <FormControl isRequired isInvalid={errors.usernameEmpty}>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                            id="username" type="text" name="username" variant="filled"
                            onChange={props.handleChange}
                            onKeyUp={handleValidation}
                            onBlur={handleValidation}
                            value={props.formData.username}
                        />
                        {errors.usernameEmpty && <FormErrorMessage>Username is required.</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.emailEmpty || errors.emailInvalid}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email" type="email" name="email" variant="filled"
                            onChange={props.handleChange}
                            value={props.formData.email}
                        />
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.passwordEmpty || errors.passwordNotStrong}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            id="password" type="password" name="password" variant="filled"
                            onChange={props.handleChange} value={props.formData.password}
                        />
                    </FormControl>
                    <FormControl isRequired
                        isInvalid={errors.confirmPasswordEmpty || errors.confirmPasswordDoesNotMatch}>
                        <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
                        <Input
                            id="confirm-password" type="password" name="confirmPassword" variant="filled"
                            onChange={props.handleChange} value={props.formData.confirmPassword}
                        />
                    </FormControl>
                </SimpleGrid>
            </Container>
            <HStack>
                <Button colorScheme="teal" onClick={handleNextPage}>Next</Button>
            </HStack>
        </>
    )
}