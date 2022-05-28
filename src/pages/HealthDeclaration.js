import {
    FormControl,
    FormLabel,
    RadioGroup,
    HStack,
    Radio,
    SimpleGrid
} from "@chakra-ui/react"
import "./health-declaration.css"

export default function HealthDeclaration() {
    return (
        <>
            <ol>
                <li>
                    <p>Are you experiencing <i>(nakakaranas ka ba ng)</i>:</p>
                    <ul>
                        <SimpleGrid columns={[1, null, 2]} spacingX={8} ml={8}>
                            <div className="wrapper">
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Sore throat <i>(pananakit ng lalamunan)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Body pains <i>(pananakit ng katawan)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Headache <i>(sakit ng ulo)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Fever the past few days <i>(lagnat sa nakalipas na araw)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                            </div>
                            <div className="wrapper">
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Coughs or cold <i>(ubo o sipon)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Shortness of breath <i>(hinahabol ang paghinga)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl as="fieldset" isRequired>
                                        <FormLabel as="legend">
                                            Diarrhea <i>(pagtatae)</i>
                                        </FormLabel>
                                        <RadioGroup colorScheme="teal">
                                            <HStack spacing={6}>
                                                <Radio value="y">Yes</Radio>
                                                <Radio value="n">No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </li>
                            </div>
                        </SimpleGrid>
                    </ul>
                </li>
                <li>
                    <FormControl as="fieldset" isRequired>
                        <FormLabel as="legend">
                            Have you worked together or stayed in the same close environment of a confirmed COVID-19 case? <i>(May nakasama ka ba or nakatrabahong tao na kumpirmadong may COVID-19 o coronavirus?)</i>
                        </FormLabel>
                        <RadioGroup colorScheme="teal">
                            <HStack spacing={6}>
                                <Radio value="y">Yes</Radio>
                                <Radio value="n">No</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl as="fieldset" isRequired>
                        <FormLabel as="legend">
                            Have you had any contact with anyone with fever, cough, colds, and sore throat the past 2 weeks? <i>(Mayroon ka bang nakasama na may lagnat, ubo, sipon o sakit ng lalamunan sa nakalipas na 2 linggo?)</i> 
                        </FormLabel>
                        <RadioGroup colorScheme="teal">
                            <HStack spacing={6}>
                                <Radio value="y">Yes</Radio>
                                <Radio value="n">No</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl as="fieldset" isRequired>
                        <FormLabel as="legend">
                            Have you travelled outside the Philippines in the last 14 days? <i>(Ikaw ba ay nagbiyahe sa labas ng Pilipinas sa nakalipas na 14 na araw?)</i>
                        </FormLabel>
                        <RadioGroup colorScheme="teal">
                            <HStack spacing={6}>
                                <Radio value="y">Yes</Radio>
                                <Radio value="n">No</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl as="fieldset" isRequired>
                        <FormLabel as="legend">
                            Have you travelled to any areas in NCR aside from your home? <i>(Ikaw ba ay nagpunta sa ibang parte ng NCR o Metro Manila bukod sa iyong bahay?)</i> Specify where if your answer is yes. <i>(Sabihin kung saan kung ang sagot mo ay oo.)</i> 
                        </FormLabel>
                        <RadioGroup colorScheme="teal">
                            <HStack spacing={6}>
                                <Radio value="y">Yes</Radio>
                                <Radio value="n">No</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl as="fieldset" isRequired>
                        <FormLabel as="legend">I am a PWD</FormLabel>
                        <RadioGroup colorScheme="teal">
                            <HStack spacing={6}>
                                <Radio value="y">Yes</Radio>
                                <Radio value="n">No</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl as="fieldset" isRequired>
                        <FormLabel as="legend">I am pregnant</FormLabel>
                        <RadioGroup colorScheme="teal">
                            <HStack spacing={6}>
                                <Radio value="y">Yes</Radio>
                                <Radio value="n">No</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </li>
            </ol>
        </>
    )
}