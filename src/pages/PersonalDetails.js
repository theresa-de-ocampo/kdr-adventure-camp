import {
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select
} from "@chakra-ui/react"
import React from "react"

export default function PersonalDetails(props) {
    return (
        <>
            <SimpleGrid columns={[1, null, 2]} spacingX={8} spacingY={6}>
                <FormControl isRequired>
                    <FormLabel htmlFor="first-name">First Name</FormLabel>
                    <Input
                        id="first-name" type="text" name="firstName" variant="filled"
                        onChange={props.handleChange} value={props.formData.firstName}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="last-name">Last Name</FormLabel>
                    <Input
                        id="last-name" type="text" name="lastName" variant="filled"
                        onChange={props.handleChange} value={props.formData.lastName}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="contact-no">Contact No.</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children="+63" />
                        <Input
                            id="contact-no" type="text" name="contactNo" variant="filled"
                            onChange={props.handleChange} value={props.formData.contactNo}
                        />
                    </InputGroup>
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
        </>
    )
}