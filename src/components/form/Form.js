import { useState, useEffect, useRef } from 'react';
import {
    ConnectForm,
    Exit,
    Input,
    InputWrap,
    Label, Title,
    Wrapper,
    Submit,
    TextArea,
    Overlay,
    Iframe,
    SubmitScreen
} from "./styledForm";
import exit from '../../images/exit.svg';

const Form = (props) => {

    const formRef = useRef();

    // ________________________________determine form validity
    const [isValid, setIsValid] = useState(false)

    const [nameValid, setNameValid] = useState(true);

    const [emailValid, setEmailValid] = useState(true);

    const [submitted, setSubmitted] = useState(false);

    // __________________________________inputs and errors
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        request: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: ''
    });

    const errorMessage = '(This field is required)'

    const checkFormValidity = () => {
        setIsValid(formRef.current.checkValidity())
    }

    // _____________________________ determine input for validation
    const pickInput = (name, valid) => {
        if (name === 'name') {
            if (valid) {
                setNameValid(true)
                return
            }
            else setNameValid(false)
        }
        if (name === 'email') {
            if (valid) {
                setEmailValid(true)
                return
            }
            else setEmailValid(false)
        }
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        errors[id] && updateErrors(event);
        setInputs({
            ...inputs,
            [id]: value
        });
    }

    const updateErrors = (event) => {
        const { id } = event.target;
        const valid = event.target.validity.valid;
        pickInput(id, valid)
        setErrors({
            ...errors,
            [id]: errorMessage
        });
    }

    // ________________________________________reset inputs
    const resetInputs = () => {
        setInputs({
            name: '',
            email: '',
            request: 'I would like to learn more about partnering with Awesome Container Company!'
        })
        setErrors({
            name: '',
            email: ''
        })
        setIsValid(false);
        setNameValid(true);
        setEmailValid(true);
        setSubmitted(false);
    }

    // ___________________reset inputs when popup is closed
    useEffect(() => {
        resetInputs();
    }, [props.open]);

    // ___________________________________ Google form data
    const formName = 'entry.1259736291';

    const formEmail = 'entry.1503900032';

    const formRequest = 'entry.1763891937';

    const formURL = 'https://docs.google.com/forms/d/18EfQ-4I_6IffAlGivd0wxGbebGZ1REUGuVuJe4_YvgE/formResponse';

    let submittedForm = false;
    let hiddenFrameLoaded = false;

    function handleHiddenFrameLoaded() {
        if (hiddenFrameLoaded) {
            submittedForm = true;
        } else {
            hiddenFrameLoaded = true;
        }
    }

    const submitForm = () => {
        setSubmitted(true);
    }

    return (
        <Overlay open={props.open}>
            <Wrapper>
                <Exit
                    src={exit}
                    onClick={props.closePopup} />
                {submitted ?
                    <SubmitScreen>
                        <Title
                            $thanks={true}>
                            Thanks! We will get in touch with you soon!
                        </Title>
                    </SubmitScreen>
                    :
                    <>
                        <Title>
                            Leave your contacts and request,
                            and our manager will reach out to you to
                            establish our future partnership!
                        </Title>
                        <Iframe
                            title='hidden_iframe'
                            name='hidden_iframe'
                            id='hidden_iframe'
                            onload={handleHiddenFrameLoaded} />
                        <ConnectForm
                            ref={formRef}
                            onChange={checkFormValidity}
                            target='hidden_iframe'
                            action={formURL}
                            method='POST'
                            onSubmit={submitForm}>
                            <InputWrap>
                                <Label
                                    $valid={nameValid}>
                                    Personal or company name *
                                    {!nameValid && errorMessage}
                                </Label>
                                <Input
                                    $valid={nameValid}
                                    type='text'
                                    name={formName}
                                    id='name'
                                    required
                                    onChange={handleChange}
                                    onBlur={updateErrors}
                                    value={inputs.name} />
                            </InputWrap>
                            <InputWrap>
                                <Label
                                    $valid={emailValid}>
                                    Email *
                                    {!emailValid && errorMessage}
                                </Label>
                                <Input
                                    $valid={emailValid}
                                    type='email'
                                    id='email'
                                    name={formEmail}
                                    required
                                    onChange={handleChange}
                                    onBlur={updateErrors}
                                    value={inputs.email} />
                            </InputWrap>
                            <InputWrap>
                                <Label
                                    $valid={true}>
                                    Your request / interest
                                </Label>
                                <TextArea
                                    name={formRequest}
                                    id='request'
                                    onChange={handleChange}
                                    value={inputs.request} />
                            </InputWrap>
                            <Submit
                                valid={isValid}
                                disabled={!isValid}>
                                Send</Submit>
                        </ConnectForm>
                    </>
                }
            </Wrapper>
        </Overlay>
    )
}

export default Form;