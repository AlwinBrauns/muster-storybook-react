import SubmitButton from "./SubmitButton";
import {useState} from "react";

export default {
    title: "Components/Buttons/SubmitButton",
    component: SubmitButton,
    parameters: {
        viewMode: 'canvas',
    }
}

const WrappedTemplate = (args) => {
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = (e)=>{
        e.preventDefault()
        setSubmitted(true)
    }
    return <form onSubmit={event => onSubmit(event)}>
        <SubmitButton submitted={submitted} {...args} />
    </form>
}

const RawTemplate = (args) => <SubmitButton {...args} />

export const Wrapped = WrappedTemplate.bind({})

Wrapped.args = {
    label: "Submit"
}
Wrapped.parameters = {
    controls: {
        exclude: /^submitted*/
    }
}

export const Raw = RawTemplate.bind({})

Raw.args = {
    label: "Submit",
    submitted: false
}