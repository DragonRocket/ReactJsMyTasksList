import { Fragment } from "react"
import Action from "./Action"
import PropTypes from "prop-types";
import '../styles/Actions.css'

const Actions = ({actions}) => {
    return (
        <Fragment>
            <div className="actions">
                {
                    actions.map((action, index) => (
                        <Action key={index} action={action} />
                    ))
                }
            </div>
        </Fragment>
    )
}

Actions.propTypes = {
    actions: PropTypes.array.isRequired
}

export default Actions