import './Card.scss'
import PropTypes from 'prop-types'
export default function Card({accent,type,sideNode,title,children,...props}){
    return (
        <div aria-label={"card container"} className={"Card " + type + " " + (accent?"accent":"")}>
            <div className="header">
                <h3 className="title">
                    {title}
                </h3>
            </div>
            <div className="body">
                {children}
            </div>
            <div className="footer">
                <small className="sideNote">
                    {sideNode}
                </small>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    sideNode: PropTypes.string,
    type: PropTypes.oneOf(['basic', 'center', 'right']),
    accent: PropTypes.bool
}

