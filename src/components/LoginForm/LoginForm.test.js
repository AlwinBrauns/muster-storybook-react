import {render, screen} from "@testing-library/react";
import LoginForm from "./LoginForm";
import {fireEvent} from "@storybook/testing-library";
import {Basic} from "./LoginForm.stories";

describe("LoginForm", ()=>{
    it('should render', ()=>{
        render(<LoginForm />)
        //Important: name: "login" does represent aria-label and NOT name in the form
        const form = screen.getByRole("form", {name: "login"})
        expect(form).toBeDefined()
    })
    it('can be used to write the username and password', ()=>{
        render(<LoginForm />)

        //Important: name does represent aria-label and NOT name in the inputs
        const username = screen.getByRole('textbox', {name: "username"})
        const password = screen.getByRole('textbox', {name: "password"})

        fireEvent.change(username, {target: {value: 'mustermann'}})
        fireEvent.change(password, {target: {value: 'musterpassword'}})

        expect(username).toBeDefined()
        expect(password).toBeDefined()
        expect(username.value).toBe('mustermann')
        expect(password.value).toBe('musterpassword')
    })
    it('can be submitted', async ()=>{
        render(<LoginForm />)

        //Important: name does represent aria-label and NOT name in the inputs
        const username = screen.getByRole('textbox', {name: "username"})
        const password = screen.getByRole('textbox', {name: "password"})
        const submit = screen.getByRole('button')

        fireEvent.change(username, {target: {value: 'mustermann'}})
        fireEvent.change(password, {target: {value: 'musterpassword'}})
        fireEvent.click(submit)

        await screen.findByText(/check.svg/i)

        const svg = screen.getByText(/check.svg/i)
        expect(svg).toBeVisible()
        expect(username.value).toBe('')
        expect(password.value).toBe('')
    })
})

describe("LoginForm - Stories", ()=>{
    it('should render the "Basic" story', ()=>{
        render(<Basic {...Basic.args}/>)
        const form = screen.getByRole("form", {name: "login"})
        expect(form).toBeDefined()
    });
    it('should play the interaction', async ()=>{
        const {container} = render(<Basic {...Basic.args}/>)

        await Basic.play({canvasElement: container})
        await screen.findByText(/check.svg/i)
        const svg = screen.getByText(/check.svg/i)

        expect(svg).toBeVisible()
    })
})