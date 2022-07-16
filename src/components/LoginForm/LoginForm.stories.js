import '../../index.scss'
import LoginForm from "./LoginForm";
import {userEvent, waitFor, within} from "@storybook/testing-library";

export default {
    title: "Interactions/LoginForm",
    component: LoginForm,
    parameters: {
        viewMode: 'canvas',
    },
}

const Template = (args) => (
    <LoginForm {...args} />
)

const Basic = Template.bind({})
Basic.args = {

}
Basic.play = async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByTestId('username'), "mustermann", {
        delay: 100
    })
    await userEvent.type(canvas.getByTestId('password'), "mustersecret", {
        delay: 100
    })
    await userEvent.click(canvas.getByRole('button'))
}

export {
    Basic
}