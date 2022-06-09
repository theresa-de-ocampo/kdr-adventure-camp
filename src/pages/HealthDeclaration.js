import {
    Container,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Checkbox,
    HStack,
    Button,
    useToast
} from "@chakra-ui/react"
import React from "react"
import "./health-declaration.css"
import YesOrNo from "../components/YesOrNo"
import Axios from "../api/Axios"
import errorHandler from "../services/utils/errorHandler"

export default function HealthDeclaration(props) {
    const [doesNotAgree, setDoesNotAgree] = React.useState(false)
    const [isNextClicked, setIsNextClicked] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const toast = useToast()

    function handleNextPage() {
        setDoesNotAgree(!props.formData.agree)
        setIsNextClicked(true)
    }

    async function submitData() {
        const data = props.formData
        let userId, success = false
        const userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            contactNo: data.contactNo,
            birthday: data.birthday ? data.birthday : null,
            civilStatus: data.civilStatus ? data.civilStatus : null
        }

        await Axios.post("/auth/local/register", userData)
            .then(response => userId = response.data.user.id)
            .catch(error => errorHandler(error, toast))

        if (userId) {
            const healthDeclaration = {
                data: {
                    soreThroat: data.soreThroat === "y" ? true : false,
                    bodyPains: data.bodyPains === "y" ? true : false,
                    headache: data.headache === "y" ? true : false,
                    fever: data.fever === "y" ? true : false,
                    coughsCold: data.coughsCold === "y" ? true : false,
                    dyspnea: data.dyspnea === "y" ? true : false,
                    diarrhea: data.diarrhea === "y" ? true : false,
                    workplaceWithCovid: data.workplaceWithCovid === "y" ? true : false,
                    contactWithSymptoms: data.contactWithSymptoms === "y" ? true : false,
                    internationalTravel: data.internationalTravel === "y" ? true : false,
                    ncrTravel: data.ncrTravel === "y" ? true : false,
                    pwd: data.pwd === "y" ? true : false,
                    pregnant: data.pregnant === "y" ? true : false,
                    userId: userId
                }
            }
            
            await Axios.post("/health-declarations", healthDeclaration)
                .then(() => success = true)
                .catch(error => errorHandler(error, toast))
        }
        setIsLoading(false)
        
        return success
    }

    React.useEffect(function() {
        async function processData() {
            const success = await submitData()
            if (success)
                props.nextPage()
            else
                setIsNextClicked(false)
        }

        if (isNextClicked) {
            if (!doesNotAgree) {
                setIsLoading(true)
                processData()
            }
            else
                setIsNextClicked(false)
        }
        // eslint-disable-next-line
    }, [isNextClicked])

    React.useEffect(function() {
        if (props.formData.agree)
            setDoesNotAgree(false)
    }, [props.formData.agree])

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
                                            <YesOrNo
                                                name="soreThroat"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
                                        </FormControl>
                                    </li>
                                    <li>
                                        <FormControl as="fieldset" isRequired>
                                            <FormLabel as="legend">
                                                Body pains <i>(pananakit ng katawan)</i>
                                            </FormLabel>
                                            <YesOrNo
                                                name="bodyPains"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
                                        </FormControl>
                                    </li>
                                    <li>
                                        <FormControl as="fieldset" isRequired>
                                            <FormLabel as="legend">
                                                Headache <i>(sakit ng ulo)</i>
                                            </FormLabel>
                                            <YesOrNo
                                                name="headache"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
                                        </FormControl>
                                    </li>
                                    <li>
                                        <FormControl as="fieldset" isRequired>
                                            <FormLabel as="legend">
                                                Fever the past few days <i>(lagnat sa nakalipas na araw)</i>
                                            </FormLabel>
                                            <YesOrNo
                                                name="fever"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
                                        </FormControl>
                                    </li>
                                </div>
                                <div className="wrapper">
                                    <li>
                                        <FormControl as="fieldset" isRequired>
                                            <FormLabel as="legend">
                                                Coughs or cold <i>(ubo o sipon)</i>
                                            </FormLabel>
                                            <YesOrNo
                                                name="coughsCold"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
                                        </FormControl>
                                    </li>
                                    <li>
                                        <FormControl as="fieldset" isRequired>
                                            <FormLabel as="legend">
                                                Shortness of breath <i>(hinahabol ang paghinga)</i>
                                            </FormLabel>
                                            <YesOrNo
                                                name="dyspnea"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
                                        </FormControl>
                                    </li>
                                    <li>
                                        <FormControl as="fieldset" isRequired>
                                            <FormLabel as="legend">
                                                Diarrhea <i>(pagtatae)</i>
                                            </FormLabel>
                                            <YesOrNo
                                                name="diarrhea"
                                                handleChange={props.handleChange}
                                                formData={props.formData}
                                            />
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
                            <YesOrNo
                                name="workplaceWithCovid"
                                handleChange={props.handleChange}
                                formData={props.formData}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl as="fieldset" isRequired>
                            <FormLabel as="legend">
                                Have you had any contact with anyone with fever, cough, colds, and sore throat the past 2 weeks? <i>(Mayroon ka bang nakasama na may lagnat, ubo, sipon o sakit ng lalamunan sa nakalipas na 2 linggo?)</i> 
                            </FormLabel>
                            <YesOrNo
                                name="contactWithSymptoms"
                                handleChange={props.handleChange}
                                formData={props.formData}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl as="fieldset" isRequired>
                            <FormLabel as="legend">
                                Have you travelled outside the Philippines in the last 14 days? <i>(Ikaw ba ay nagbiyahe sa labas ng Pilipinas sa nakalipas na 14 na araw?)</i>
                            </FormLabel>
                            <YesOrNo
                                name="internationalTravel"
                                handleChange={props.handleChange}
                                formData={props.formData}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl as="fieldset" isRequired>
                            <FormLabel as="legend">
                                Have you travelled to any areas in NCR aside from your home? <i>(Ikaw ba ay nagpunta sa ibang parte ng NCR o Metro Manila bukod sa iyong bahay?)</i> Specify where if your answer is yes. <i>(Sabihin kung saan kung ang sagot mo ay oo.)</i> 
                            </FormLabel>
                            <YesOrNo
                                name="ncrTravel"
                                handleChange={props.handleChange}
                                formData={props.formData}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl as="fieldset" isRequired>
                            <FormLabel as="legend">I am a PWD</FormLabel>
                            <YesOrNo
                                name="pwd"
                                handleChange={props.handleChange}
                                formData={props.formData}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl as="fieldset" isRequired>
                            <FormLabel as="legend">I am pregnant</FormLabel>
                            <YesOrNo
                                name="pregnant"
                                handleChange={props.handleChange}
                                formData={props.formData}
                            />
                        </FormControl>
                    </li>
                </ol>
                <FormControl isRequired mt={6} isInvalid={doesNotAgree}>
                    <Checkbox name="agree"
                        onChange={props.handleChange}
                        isChecked={props.formData.agree}
                    >
                        I agree to KDR's terms and conditions
                    </Checkbox>
                    {
                        doesNotAgree &&
                        <FormErrorMessage>You must agree in order to proceed.</FormErrorMessage>
                    }
                </FormControl>
            </Container>
            <HStack>
                <Button
                    colorScheme="teal" onClick={props.prevPage} variant="outline"
                    isLoading={isLoading}
                >
                    Back
                </Button>
                <Button
                    colorScheme="teal" onClick={handleNextPage}
                    isLoading={isLoading} loadingText="Submitting"
                >
                    Submit
                </Button>
            </HStack>
        </>
    )
}