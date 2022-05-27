import { Container, Heading } from "@chakra-ui/react"

export default function Header(props) {
    return (
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
            <Heading size={["md", "lg"]}>{props.title}</Heading>
        </Container>
    )
}