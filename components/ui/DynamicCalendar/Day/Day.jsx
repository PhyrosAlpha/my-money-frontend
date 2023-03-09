import { useState } from 'react'
import Board from '../Board/Board'
import ConfigSingleton from '../ConfigSingleton'
import style from './style.module.scss'

const Day = (props) => {
    const BACKGROUND_DATA = ConfigSingleton.getInstance().getStyles()["backgroundData"];
    const BACKGROUND_NO_DATA = ConfigSingleton.getInstance().getStyles()["backgroundNoData"];
    const CLICK_DAY_CALLBACK = ConfigSingleton.getInstance().getCallbacks()["clickDay"];

    const [ showBoard, setShowBoard ] = useState(false);
    function renderBackgroundColor(){
        let sizeData = props.day.data.length;
        if(sizeData > 0){
            return BACKGROUND_DATA
        }else{
            return BACKGROUND_NO_DATA
        }
    }

    function handleClickDay(date, data) {
        CLICK_DAY_CALLBACK(date, data);

    }

    return(
        <td className={style.calendarDay }
            onMouseEnter={() => {props.day.data.length > 0 ? setShowBoard(true) : null}} 
            onMouseLeave={() => {setShowBoard(false)}}
            onClick={() => {handleClickDay(props.day.date, props.day.data)}}>
                
            <div style={{backgroundColor:renderBackgroundColor()}}>{props.day.date.getDate()}</div>
            <Board content={props.day.data} show={showBoard} />
        </td>
    )
}

export default Day;