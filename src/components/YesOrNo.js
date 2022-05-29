import {
    RadioGroup,
    HStack,
    Radio
} from "@chakra-ui/react"

export default function RadioButton(props) {
    function createEvent(name, value) {
        return {
            target: {
                name: name,
                value: value,
                type: "radio",
                checked: false
            }
        }
    }
    const name = props.name

    return (
        <>
            <RadioGroup
                colorScheme="teal" name={name}
                onChange={
                    function(value) {
                        props.handleChange(
                            {
                                target: {
                                    name: name,
                                    value: value,
                                    type: "radio",
                                    checked: false
                                }
                            }
                        )
                    }
                }
                value={props.formData[name]}
            >
                <HStack spacing={6}>
                    <Radio value="y">Yes</Radio>
                    <Radio value="n">No</Radio>
                </HStack>
            </RadioGroup>
        </>
    )
}