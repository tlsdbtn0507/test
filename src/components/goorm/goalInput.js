import css from '../../css/timeline.module.css'
import { useState } from 'react'

import GoalCell from './goalCell';

const GoalInput = () => {

    const [goal,setGoals] = useState(null);
    const [opacity, setOpacity] = useState(0);
    const [showGoal, setShowGoal] = useState(false);

    const submitGoalName = e => {
        e.preventDefault();
        const {value} = e.target[0]
        setGoals(value.split(',')[0]);
        setOpacity(+value.split(',')[1])
        setShowGoal(!showGoal)

    }

    return(
        <tr className={css.cells}>
            <td>
                { showGoal ? <GoalCell goal={goal} opacity={opacity}/> :
                <form onSubmit={submitGoalName}>
                    <input type='text' placeholder='골 이름 , 완료율'/>
                </form>
                }
            </td>
        </tr>
    )
}

export default GoalInput