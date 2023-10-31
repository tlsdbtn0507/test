import css from '../../css/timeline.module.css'
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable'
import { useRef, useState } from 'react'

import { debounce } from 'lodash';

const GoalCell = ({goal,opacity}) => {

    const nodeRef = useRef(null)

    const [preventDrag,setPreventDrag] = useState(true)

    const handleResize = debounce(( a, b, refe ) => {
        const {width} = refe.style
        console.log(width)
    },1000);

    const trackGoal = debounce((e,{x,y}) =>{
        console.log(x,y)
    },500)

    return(
        <Draggable
            nodeRef ={nodeRef} axis='x'
            disabled={preventDrag} onDrag={trackGoal}>
            <Resizable 
                    axis='x' 
                    onResize={handleResize}
                    onResizeStart={debounce(()=>{setPreventDrag(true)},1000)}
                    onResizeStop={debounce(()=>{setPreventDrag(false)},1000)} 
                    className={css.span}
                    style={{backgroundColor:`rgba(147, 147, 160, ${opacity/100})`}}>
                <span ref={nodeRef} >
                        {goal}
                </span>
            </Resizable>
        </Draggable>
    )
}

export default GoalCell