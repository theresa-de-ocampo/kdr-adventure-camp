import {
    FormControl,
    FormLabel,
    SimpleGrid,
    Checkbox
} from "@chakra-ui/react"
import "./health-declaration.css"
import YesOrNo from "../components/YesOrNo"

export default function HealthDeclaration(props) {
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
            <FormControl isRequired mt={6}>
                <Checkbox name="agree" onChange={props.handleChange} isChecked={props.formData.agree}>
                    I agree to KDR's terms and conditions
                </Checkbox>
            </FormControl>
        </>
    )
}