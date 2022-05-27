import { SimpleGrid, FormControl, FormLabel, Input } from "@chakra-ui/react"
import React from "react"

export default function UserDetails(props) {
    return (
        <>
            <SimpleGrid columns={[1, null, 2]} spacingX={8} spacingY={6}>
                <FormControl isRequired>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                        id="username" type="text" name="username" variant="filled"
                        onChange={props.handleChange} value={props.formData.username}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        id="email" type="email" name="email" variant="filled"
                        onChange={props.handleChange} value={props.formData.email}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        id="password" type="password" name="password" variant="filled"
                        onChange={props.handleChange} value={props.formData.password}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
                    <Input
                        id="confirm-password" type="password" name="confirmPassword" variant="filled"
                        onChange={props.handleChange} value={props.formData.confirmPassword}
                    />
                </FormControl>
            </SimpleGrid>
        </>
    )
}