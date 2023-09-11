import { Fragment } from "react"
import '../styles/TasksCard.css'
import Tasks from "./Tasks"
import Divider from './Divider'

const TasksCard = () => {
    const tasksCardTitle = 'My tasks'

    return (
        <Fragment>
            <div className="card">
                <div className="card-head">
                    {tasksCardTitle}
                </div>
                <Divider />
                <div className="card-body">
                    <Tasks />
                </div>
            </div>
        </Fragment>
    )
}

export default TasksCard