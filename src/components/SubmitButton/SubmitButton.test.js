import SubmitButton from "./SubmitButton";
import {Raw, Wrapped} from "./SubmitButton.stories"
import {render, screen} from "@testing-library/react"
import {fireEvent} from "@storybook/testing-library";

describe("SubmitButton", () => {
    test('should render', ()=>{
        render(<SubmitButton submitted={false} label={"Send"}/>)
        const button = screen.getByRole("button")
        expect(button).toBeDefined()
        expect(button).toHaveValue("Send")
    })

    test('should render with value Submit if no label set', ()=>{
        render(<SubmitButton submitted={false}/>)
        const button = screen.getByRole("button")
        expect(button).toBeDefined()
        expect(button).toHaveValue("Submit")
    })

    test('should show svg if submitted', ()=>{
        render(<SubmitButton submitted={true} />)
        const svg = screen.getByText(/svg/i)
        expect(svg).toBeVisible()
    })
})

describe("SubmitButton - Story", ()=>{
    test('should render raw story', ()=>{
        render(<Raw {...Raw.args}/>)
        const button = screen.getByRole("button")
        expect(button).toBeDefined()
        expect(button).toHaveValue("Submit")
    })
    test('should render wrapped story', ()=>{
        render(<Wrapped {...Wrapped.args}/>)
        const button = screen.getByRole("button")
        expect(button).toBeDefined()
        expect(button).toHaveValue("Submit")
    })
    test('should show svg if submitted', async ()=>{
        render(<Wrapped {...Wrapped.args}/>)
        const button = screen.getByRole("button")
        fireEvent.click(button)
        await screen.findByText(/svg/i)
        const svg = screen.getByText(/svg/i)
        expect(svg).toBeVisible()
        expect(button).toBeDefined()
    })
    test('should NOT show svg if NOT submitted', async ()=>{
        render(<Wrapped {...Wrapped.args}/>)
        const button = screen.getByRole("button")
        const svg = screen.getByText(/svg/i)
        expect(svg).not.toBeVisible()
        expect(button).toBeDefined()
    })
})
