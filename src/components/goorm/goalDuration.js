import css from '../../css/timeline.module.css'

const start = new Date(2023,9,14)
const end = new Date(2023,10,18)
const toDay = new Date()

const getDateDiff = (date1, date2) => {
    const diffDate = date1.getTime() - date2.getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
}

const GoalDuration = () => {

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

    return(
        <>
            <span className={css.start}>{startString}</span>
            <span className={css.end}>{endString}</span>
        </>
    )
}
export const datesDiff = getDateDiff(end,start);
export const datesDiifToday = Math.trunc(getDateDiff(toDay,start))
export default GoalDuration