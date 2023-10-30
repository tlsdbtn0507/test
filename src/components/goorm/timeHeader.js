import { useDispatch, useSelector } from 'react-redux'
import css from '../../css/timeHeader.module.css'
import { goalActions } from '../../store/goalSlice'
import GoalInput from './goalInput'

const TimeHeader = (props) => {

    const dispatch = useDispatch()

    const addGoalHandler = () => {
        dispatch(goalActions.addGoal());
        // props.addGoals(prev=>prev.push(
        //     <tr className={css.cells}>
        //     <td>a</td>
        // </tr>
        // ))
        props.addGoals(<GoalInput/>)
    }

    return(
        <div className={css.div}>
            <div className={css.goalDiv}>
                <h2 >Goal</h2>
                <button className={css.btn} onClick={addGoalHandler} >+</button>
            </div>
            <div>
                <p className={css.alertCell}>alert 칸</p>
            </div>
        </div >
    )
}

export default TimeHeader