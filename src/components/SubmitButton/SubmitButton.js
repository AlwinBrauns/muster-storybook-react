import './SubmitButton.scss'
import {ReactComponent as CheckIcon} from "../_svgs/check.svg";
import PropTypes from "prop-types";

export default function SubmitButton({label,submitted,...props}){
    return (
        <div className={"SubmitButton " + (submitted?"submitted":"")}>
            <input type={"submit"} disabled={submitted} value={label?label:"Submit"}/>
            <span style={{visibility: submitted?"visible":"hidden"}}>
                <CheckIcon />
            </span>
        </div>
    )
}

SubmitButton.propTypes = {
    submitted: PropTypes.bool.isRequired,
    label: PropTypes.string
}