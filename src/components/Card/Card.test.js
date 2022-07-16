import {render, screen} from "@testing-library/react";
import Card from "./Card";
import {Accent, Basic, Center, Right} from "./Card.stories";

describe("Card", ()=>{
    it('should render', ()=>{
        render(<Card title={"Test"} />)
        const container = screen.getByLabelText(/container/i)
        expect(container).toBeInTheDocument()
    })
})

describe("Card - Stories", ()=>{
    it('should render the "Basic" story', () => {
        render(<Basic {...Basic.args} />)
        const container = screen.getByLabelText(/container/i)
        expect(container).toBeInTheDocument()
    });
    it('should render the "Accent" story', ()=>{
        render(<Accent {...Accent.args} />)
        const container = screen.getByLabelText(/container/i)
        expect(container).toBeInTheDocument()
    })
    it('should render the "Center" story', ()=>{
        render(<Center {...Center.args} />)
        const container = screen.getByLabelText(/container/i)
        expect(container).toBeInTheDocument()
    })
    it('should render the "Right" story', ()=>{
        render(<Right {...Right.args} />)
        const container = screen.getByLabelText(/container/i)
        expect(container).toBeInTheDocument()
    })
})