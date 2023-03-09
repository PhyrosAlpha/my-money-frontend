import Day from "../Day/Day";
import style from './style.module.scss';

const Week = (props) => {   
    //console.log(props);

    return(
        <tr className={style.calendarWeek}>
            {props.week.map((object, index) => {
                return(
                    <Day key={object.date} day={object} />
                )
            })}
        </tr>
    )

} 

export default Week;