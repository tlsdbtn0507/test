import css from '../../css/timeline.module.css'
import { useState } from 'react'


const GoalInput = () => {

    const [goal,setGoals] = useState(null);
    const [showGoal, setShowGoal] = useState(false)
    
    const submitGoalName = e => {
        e.preventDefault();
        const {value} = e.target[0]
        setGoals(value);
        setShowGoal(!showGoal)
    }
    
    return(
        <tr className={css.cells}>
            <td>
                { showGoal ? 
                <div className={css.span} style={{opacity:1}}>{goal}</div> : 
                <form  onSubmit={submitGoalName}>
                    <input type='text'/>
                </form>
                }
            </td>
        </tr>
    )
}

export default GoalInput