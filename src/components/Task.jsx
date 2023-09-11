import { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types";
import Actions from "./Actions"
import '../styles/Task.css'
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Task = ({title, actions}) => {
    const [hideActions, setHideActions] = useState('')
    const [completedActions, setCompletedActions] = useState(0)

    function countCompletedActions(){
        let count = 0
        actions.forEach(action => {
            if (action.status === 'completed'){
                count++
            }
        })
        setCompletedActions(count)
    }

    useEffect(() => {
      countCompletedActions()
    }, [])

    function handleOnClickHeader () {
        setHideActions(prevValue => {
            return (
                prevValue === '' || prevValue === '_hide'
                ?'_show'
                :'_hide'
            )
        })
    }

    return (
        <Fragment>
            <div className="task">
                <div className="task-hide" onClick={handleOnClickHeader}>
                    {
                        hideActions === '' || hideActions === '_hide'
                        ?<CgChevronRight />
                        :<CgChevronDown />
                    }
                </div>
                <div className="task-content">
                    <div className="task-content-header" onClick={handleOnClickHeader}>
                        <div className="task-content-header-text">
                            {title}
                        </div>
                        <div className="task-content-header-progress">
                            <div className="task-content-header-progress-text">
                                {completedActions}/{actions.length}
                            </div>
                            <div className="task-content-header-progress-meter">
                                <CircularProgressbar styles={{path: {stroke: 'purple'}}} value={completedActions/actions.length*100} strokeWidth={15}/>
                            </div>
                        </div>
                    </div>
                    <div className={`task-content-actions${hideActions}`}>
                        <Actions actions={actions} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired
}

export default Task