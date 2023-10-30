import css from '../css/timeHeader.module.css'

const TimeHeader = () => {

    return(
        <div className={css.div}>
            <div className={css.goalDiv}>
                <h2 >Goal</h2>
                <button className={css.btn} >+</button>
            </div>
            <div>
                <p className={css.alertCell}>alert 칸</p>
            </div>
        </div >
    )
}

export default TimeHeader