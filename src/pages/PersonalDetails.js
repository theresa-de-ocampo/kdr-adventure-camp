import {
    Container,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    HStack,
    Button,
    FormErrorMessage
} from "@chakra-ui/react"
import React from "react"

export default function PersonalDetails(props) {
    const [errors, setFormErrors] = React.useState({
        firstNameEmpty: false,
        lastNameEmpty: false,
        contactNoEmpty: false,
        contactNoInvalid: false,
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
        checkFirstName()
        checkLastName()
        checkContactNo()
    }

    function checkFirstName() {
        setError("firstNameEmpty", !Boolean(props.formData.firstName))
    }

    function checkLastName() {
        setError("lastNameEmpty", !Boolean(props.formData.lastName))
    }

    function checkContactNo() {
        const contactNo = props.formData.contactNo
        setError("contactNoEmpty", !Boolean(contactNo))

        if (contactNo) {
            const regex = /^9\d{9}$/
            setError("contactNoInvalid", !regex.test(contactNo))
        }
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
                    <FormControl isRequired isInvalid={errors.firstNameEmpty}>
                        <FormLabel htmlFor="first-name">First Name</FormLabel>
                        <Input
                            id="first-name" type="text" name="firstName" variant="filled"
                            onChange={props.handleChange}
                            onKeyUp={function(e) {
                                if (!(e.key === "Tab" || e.key === "Shift"))
                                    checkFirstName()
                            }}
                            onBlur={checkFirstName}
                            value={props.formData.firstName}
                        />
                        {
                            errors.firstNameEmpty &&
                            <FormErrorMessage>First name is required</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.lastNameEmpty}>
                        <FormLabel htmlFor="last-name">Last Name</FormLabel>
                        <Input
                            id="last-name" type="text" name="lastName" variant="filled"
                            onChange={props.handleChange}
                            onKeyUp={function(e) {
                                if (!(e.key === "Tab" || e.key === "Shift"))
                                    checkLastName()
                            }}
                            onBlur={checkLastName}
                            value={props.formData.lastName}
                        />
                        {
                            errors.lastNameEmpty &&
                            <FormErrorMessage>Last name is required.</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.contactNoEmpty || errors.contactNoInvalid}>
                        <FormLabel htmlFor="contact-no">Contact No.</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="+63" />
                            <Input
                                id="contact-no" type="text" name="contactNo" variant="filled"
                                onChange={props.handleChange}
                                onKeyUp={function(e) {
                                    if (!(e.key === "Tab" || e.key === "Shift"))
                                        checkContactNo()
                                }}
                                onBlur={checkContactNo}
                                value={props.formData.contactNo}
                            />
                        </InputGroup>
                        {
                            errors.contactNoEmpty ?
                            <FormErrorMessage>Contact number is required</FormErrorMessage> :
                            <FormErrorMessage>Invalid cellphone number (9xxxxxxxxx)</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="birthday">Birthday</FormLabel>
                        <Input
                            id="birthday" type="date" name="birthday" variant="filled"
                            onChange={props.handleChange} value={props.formData.birthday}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="civil-status">Civil Status</FormLabel>
                        <Select
                            placeholder="Choose" name="civilStatus" variant="filled"
                            onChange={props.handleChange} value={props.formData.civilStatus}
                        >
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option vlaue="divorced">Divorced</option>
                        </Select>
                    </FormControl>
                </SimpleGrid>
            </Container>
            <HStack>
                <Button colorScheme="teal" onClick={props.prevPage} variant="outline">Back</Button>
                <Button colorScheme="teal" onClick={handleNextPage}>Next</Button>
            </HStack>
        </>
    )
}