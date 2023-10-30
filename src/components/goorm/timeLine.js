import css from '../../css/timeline.module.css'
import TimeHeader from './timeHeader'

import GoalDuration, { datesDiff, datesDiifToday } from './goalDuration'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const TimeLine =(axiosGoals)=>{

    const dates = {datesDiff,datesDiifToday}

    const [goals,setGoals] = useState([])

    const dateCells = [];

    const goalCellsLength = useSelector(state => state.goal.goals);

    for (let i = 0; i < dates.datesDiff; i++) {
        dateCells.push(
        <td key={i} className={css['dates-td']}>{i===dates.datesDiifToday ? '|': ""}</td>
        )
    };

    const addGoals = (jsx) => {
        setGoals([...goals,jsx])
    }

    // 나중에 goalapi 받아올때 활용
    // useEffect(()=>{
    //    if(goalCellsLength > 0 ) {
    //     console.log(1)
    //     setGoals([...goals,goalCellsLength])
    //    }
    // },[goalCellsLength])

    return(
        <>
            <TimeHeader addGoals={addGoals}/>
            <GoalDuration/>
            <table>
              <tbody>
                <tr className={css.dates}>
                    {dateCells.map(e=>e)}
                </tr>
                {goals.map((e,ind)=>{
                    <tr key={ind} className={css.cells}>
                        <td>{e}</td>
                    </tr>
                })}
                {goals}
                </tbody>  
            </table>
        </>
    )
}

export default TimeLine