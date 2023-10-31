import css from '../../css/timeline.module.css'
import { useState } from 'react'
import { Resizable } from 're-resizable';

const GoalInput = () => {

    const [goal,setGoals] = useState(null);
    const [opacity, setOpacity] = useState(0);
    const [showGoal, setShowGoal] = useState(false);


    
    const submitGoalName = e => {
        e.preventDefault();
        const {value} = e.target[0]

        
        console.log(value.split(','))
        setGoals(value.split(',')[0]);
        setOpacity(+value.split(',')[1])
        setShowGoal(!showGoal)

    }

    const handleResize = ( a, b, ref ) => {
        console.log(ref.style.width)
    }
    
    return(
        <tr className={css.cells}>
            <td>
                { showGoal ? 
                <Resizable 
                    onResize={handleResize}
                    className={ opacity === 0 ? css.zeroSpan : css.span} 
                    style={{backgroundColor:`rgba(147, 147, 160, ${opacity/100})`}}>
                        {goal}
                </Resizable> : 
                <form  onSubmit={submitGoalName}>
                    <input type='text' placeholder='골 이름 , 완료율'/>
                </form>
                }
            </td>
        </tr>
    )
}

export default GoalInput