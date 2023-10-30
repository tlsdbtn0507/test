import css from '../css/timeline.module.css'
import TimeHeader from './timeHeader'

const TimeLine =()=>{

    const start = new Date(2023,9,14)
    const end = new Date(2023,10,18)
    const toDay = new Date()

    const stringMaker = (date)=>{
        const arr = [[date.getFullYear(),'년'],[date.getMonth()+1,'월'],[date.getDate(),'일']]

        let str = '';
        for (let i = 0; i < arr.length; i++) {
            str += `${arr[i][0]}${arr[i][1]} ` 
        }

        return str
    }

    const startString = stringMaker(start)
    const endString = stringMaker(end)

    const getDateDiff = (date1, date2) => {
        const diffDate = date1.getTime() - date2.getTime();
        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
      }


    const datesDiff = getDateDiff(end,start);
    const datesDiifToday = Math.trunc(getDateDiff(toDay,start))


    const dateCells = []

    for (let i = 0; i < datesDiff; i++) {
        dateCells.push(
        <td key={i} className={css['dates-td']}>{i===datesDiifToday ? '|': ""}</td>
        )
    }

    const goalCells = []

    return(
        <>
            <TimeHeader/>
                <span className={css.start}>{startString}</span>
                <span className={css.end}>{endString}</span>
            <table>
              <tbody>
                <tr className={css.dates}>
                    {dateCells.map(e=>e)}
                </tr>
                <tr className={css.cells}>
                    <td> todo</td>
                </tr>
                </tbody>  
            </table>
        </>
    )
}

export default TimeLine