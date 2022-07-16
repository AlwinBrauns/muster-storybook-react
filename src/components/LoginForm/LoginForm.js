import './LoginForm.scss'
import PropTypes from 'prop-types'
import Card from "../Card/Card";
import {useState} from "react";
import {ReactComponent as ClockIcon} from '../_svgs/clock.svg'
import SubmitButton from "../SubmitButton/SubmitButton";

export default function LoginForm(props){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify({
            name: name,
            password: password
        }))
        setName("")
        setPassword("")
        setSubmitted(true)
    }
    return (
        <Card title={"LogIn"} type={"center"} >
            <ClockIcon />
            <form aria-label={"login"} name={"login"} onSubmit={e=>onSubmit(e)} className="LoginForm" data-testid={"form"}>
                <input aria-label={"username"} data-testid={"username"} value={name} onChange={e=>setName(e.target.value)} type="text" placeholder={"name"}/>
                <input aria-label={"password"} role={"textbox"} data-testid={"password"} value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder={"password"}/>
                <SubmitButton submitted={submitted} />
            </form>
        </Card>
    )
}

LoginForm.propTypes = {

}
