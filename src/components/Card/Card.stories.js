import '../../index.scss'
import Card from "./Card";

export default {
    title: "Components/Card",
    component: Card,
    parameters: {
        viewMode: 'canvas',
    }
}

const Template = (args) => (
    <Card {...args}>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
    </Card>
)


const Basic = Template.bind({})
Basic.args = {
    title: "Basic",
    sideNode: "made by brauns",
    type: "basic"
}

const Center = Template.bind({})
Center.args = {
    title: "Center",
    sideNode: "made by brauns",
    type: "center"
}

const Right = Template.bind({})
Right.args = {
    title: "Right",
    sideNode: "made by brauns",
    type: "right"
}

const Accent = Template.bind({})
Accent.args = {
    title: "Accent",
    sideNode: "made by brauns",
    accent: true
}

export {
    Basic,
    Center,
    Right,
    Accent
}

