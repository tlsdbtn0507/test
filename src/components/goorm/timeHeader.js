import { useDispatch, useSelector } from 'react-redux'
import css from '../../css/timeHeader.module.css'
import { goalActions } from '../../store/goalSlice'
import GoalInput from './goalInput'
// import {  } from 'react-redux'

const TimeHeader = (props) => {
    const goalIndex = useSelector(s => s.goal.goals)
    
    const dispatch = useDispatch()

    const addGoalHandler = () => {
        dispatch(goalActions.addGoal());
        props.addGoals(<GoalInput key={goalIndex}/>)
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