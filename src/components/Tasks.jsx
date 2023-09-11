import { Fragment } from "react"
import Task from "./Task"
import '../styles/Tasks.css'
import tasksList from "../dummyData/tasksList"

const Tasks = () => {

    return (
        <Fragment>
            <div className="tasks">
                {
                    tasksList.map((task, index) => (
                        <Task key={index} title={task.title} actions={task.actions} />
                    ))
                }
            </div>
        </Fragment>
    )
}
export default Tasks