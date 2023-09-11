import { Fragment } from "react"
import PropTypes from "prop-types";
import '../styles/Action.css'
import { FaRegCheckCircle, FaRegCircle, FaRegTimesCircle, FaShieldAlt } from "react-icons/fa";
import { PiCircleHalfThin } from "react-icons/pi";
import { BsChatRightText, BsChatRight } from "react-icons/bs"
import { SlBriefcase } from "react-icons/sl"
import { MdAlternateEmail } from "react-icons/md"
import profilePic from "../assets/profile.jpg"

const Action = ({action}) => {
    const [dueDate, dateColor] = getFormattedDate(action.due)
    const [statusIcon, statusColor] = action.status === 'completed'
                                        ?[<FaRegCheckCircle key={0}/>, 'vision']
                                        :action.status === 'noStatus'
                                        ?[<FaRegCircle key={1}/>, 'faint']
                                        :action.status === 'scheduled'
                                        ?[<PiCircleHalfThin key={2}/>, 'alert']
                                        :action.status === 'rejected'
                                        ?[<FaRegTimesCircle key={3}/>, 'caution']
                                        :[null, 'faint']
    const [actionTypeIcon, actionTypeColor] = action.type === 'secure'
                                                ?[<FaShieldAlt key={0}/>, 'protective']
                                                :action.type === 'business'
                                                ?[<SlBriefcase key={1}/>, 'faint']
                                                :action.type === 'email'
                                                ?[<MdAlternateEmail key={2}/>, 'faint']
                                                :[null, 'faint']

    function getFormattedDate(dateString){
        const [day, month, year] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);

        const currentDate = new Date();

        const tomorrowDate = new Date(currentDate)
        tomorrowDate.setDate(currentDate.getDate() + 1)

        if (
            date.getDate() === currentDate.getDate() &&
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        ){
            return ['Due today', 'caution']
        }

        if (
            date.getDate() === tomorrowDate.getDate() &&
            date.getMonth() === tomorrowDate.getMonth() &&
            date.getFullYear() === tomorrowDate.getFullYear()
        ) {
            return ['Due tomorrow', 'alert']
        }

        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]

        const monthInWord = monthNames[date.getMonth()]
        const formattedDate = `${monthInWord} ${day}`
        return [formattedDate, date<currentDate?'critical':'faint']
    }

    return (
        <Fragment>
            <div className={`action ${action.status==='completed'?'completed-background':''}`}>
                <div className={`action-status ${statusColor}`}>
                    {
                        statusIcon
                    }
                </div>
                <div className="action-content">
                    <div className={`action-content-title ${action.status==='completed'?'completed-text':''}`}>
                        {action.title}
                    </div>
                    <div className={`${action.status==='completed'?'completed-text':'action-content-description'}`}>
                        {action.description}
                    </div>
                    <div className="action-content-footer">
                        <div className="action-content-footer-comments">
                            <div className="action-content-footer-comments-icon">
                                {
                                    action.comments
                                    ?<BsChatRightText />
                                    :<BsChatRight />
                                }
                            </div>
                            <div className="action-content-footer-comments-count faint">
                                {action.comments}
                            </div>
                        </div>
                        <div className={`action-content-footer-type ${actionTypeColor}`}>
                            {
                                actionTypeIcon
                            }
                        </div>
                        <div className={`action-content-footer-due ${dateColor}`}>
                            {
                                dueDate
                            }
                        </div>
                        <div className="action-content-footer-pic">
                            <img src={profilePic} alt="user_profile_pic" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Action.propTypes = {
    action: PropTypes.object.isRequired
}

export default Action