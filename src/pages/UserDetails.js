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
    const [isNextClicked, setIsNextClicked] = React.useState(false)

    function setError(key, value) {
        setFormErrors(prevErrors => {
            return {
                ...prevErrors,
                [key]: value
            }
        })
    }
    
    function handleValidation() {
        checkUsername()
        checkEmail()
        checkPassword()
        checkConfirmPassword()
    }

    function checkUsername() {
        setError("usernameEmpty", !Boolean(props.formData.username))
    }

    function checkEmail() {
        const email = props.formData.email
        setError("emailEmpty", !Boolean(email))

        if (email) {
            const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            setError("emailInvalid", !regex.test(email))
        }
    }

    function checkPassword() {
        const password = props.formData.password
        setError("passwordEmpty", !Boolean(password))

        if (password) {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@\-#\s$%^&*]{8,}$/
            setError("passwordNotStrong", !regex.test(password))
        }
    }

    function checkConfirmPassword() {
        const confirmPassword = props.formData.confirmPassword
        setError("confirmPasswordEmpty", !Boolean(confirmPassword))

        if (confirmPassword)
            setError("confirmPasswordDoesNotMatch", confirmPassword !== props.formData.password)
    }

    function handleNextPage() {
        handleValidation()
        setIsNextClicked(true)
    }

    React.useEffect(function() {
        if (isNextClicked) {
            let withErrors = Object.values(errors).some(error => error === true)
            if (!withErrors)
                props.nextPage()
            else
                setIsNextClicked(false)
        }
    }, [isNextClicked, errors, props])

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
                            onKeyUp={function(e) {
                                if (!(e.key === "Tab" || e.key === "Shift"))
                                    checkUsername()
                            }}
                            onBlur={checkUsername}
                            value={props.formData.username}
                        />
                        {
                            errors.usernameEmpty &&
                            <FormErrorMessage>Username is required.</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.emailEmpty || errors.emailInvalid}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email" type="email" name="email" variant="filled"
                            onChange={props.handleChange}
                            onKeyUp={function(e) {
                                if (!(e.key === "Tab" || e.key === "Shift"))
                                    checkEmail()
                            }}
                            onBlur={checkEmail}
                            value={props.formData.email}
                        />
                        {
                            errors.emailEmpty ?
                            <FormErrorMessage>Email is required.</FormErrorMessage> :
                            <FormErrorMessage>Please enter a valid email.</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.passwordEmpty || errors.passwordNotStrong}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            id="password" type="password" name="password" variant="filled"
                            onChange={props.handleChange}
                            onKeyUp={function(e) {
                                if (!(e.key === "Tab" || e.key === "Shift"))
                                    checkPassword()
                            }}
                            onBlur={checkPassword}
                            value={props.formData.password}
                        />
                        {
                            errors.passwordEmpty ?
                            <FormErrorMessage>Password is required.</FormErrorMessage> :
                            <FormErrorMessage>
                                Password should be a minimum of 8 characters consisting of at least one uppercase letter, one lowercase letter, and a digit.
                            </FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl isRequired
                        isInvalid={errors.confirmPasswordEmpty || errors.confirmPasswordDoesNotMatch}>
                        <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
                        <Input
                            id="confirm-password" type="password" name="confirmPassword" variant="filled"
                            onChange={props.handleChange}
                            onKeyUp={function(e) {
                                if (!(e.key === "Tab" || e.key === "Shift"))
                                    checkConfirmPassword()
                            }}
                            onBlur={checkConfirmPassword}
                            value={props.formData.confirmPassword}
                        />
                        {
                            errors.confirmPasswordEmpty ?
                            <FormErrorMessage>Password confirmation is required.</FormErrorMessage> :
                            <FormErrorMessage>Passwords do not match.</FormErrorMessage>
                        }
                    </FormControl>
                </SimpleGrid>
            </Container>
            <HStack>
                <Button colorScheme="teal" onClick={handleNextPage}>Next</Button>
            </HStack>
        </>
    )
}