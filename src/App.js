import {
    ChakraProvider,
    Heading
} from "@chakra-ui/react";

import "./index.css"

export default function App() {
    return (
        <>
            <ChakraProvider>
                <Heading>Personal Information</Heading>
            </ChakraProvider>
        </>
    )
}