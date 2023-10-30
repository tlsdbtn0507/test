import { useSearchParams } from 'react-router-dom'
import css from '../../css/timeline.module.css'
import { useSelector } from 'react-redux'

const GoalInput = () => {
    const goalIndex = useSelector(s => s.goal.goals)
    
    return(
        <tr key={goalIndex} className={css.cells}>
            <td>
                <input></input>
            </td>
        </tr>
    )
}

export default GoalInput