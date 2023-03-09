import { useState } from 'react';
import ConfigSingleton from './ConfigSingleton';
import CustomCallbacks from './CustomCallbacks';
import CustomIcons from './CustomIcons';
import CustomInputs from './CustomInputs';
//import CustomInputs from './CustomInputs';
import PTMonths from './PTMonths';
import style from './style.module.scss';
import Week from './Week/Week';



const Calendar = (props) => {
    //Definição de toda a configuração do componente.
    let config = ConfigSingleton.getInstance();
    config.setStyles({...CustomInputs, ...props.styles});
    config.setIcons({...CustomIcons, ...props.icons});
    config.setCallbacks({...CustomCallbacks, ...props.callbacks});

    const [selectedDate, setSelectedDate ] = useState(new Date());

    function generateCalendar(date){
        let actualDate = new Date(date);
        let calendar = [];
        actualDate.setDate(1)
        let dayInCurrentWeek = actualDate.getDay();
        actualDate.setDate(actualDate.getDate() - dayInCurrentWeek);

        for(let w = 0; w < 6;w++){
            let newWeek = []
            let weekDayCount = 0;
            while(weekDayCount < 7){
                let newObject = {}
                newObject['data'] = [];
                newObject['date'] = new Date(actualDate);

                loadDataWithinDays(newObject);

                newWeek.push(newObject);
                actualDate.setDate(actualDate.getDate() + 1);
                weekDayCount += 1;
            }
            calendar.push(newWeek);
        }
        return calendar;      
    }

    function loadDataWithinDays(day){
        let dayDate = day.date;

        if(props.data !== undefined && props.data !== null){
            for(let obj of props.data){
                let date = new Date(obj.date);

                if(date.getFullYear() === dayDate.getFullYear() &&
                   date.getMonth() === dayDate.getMonth() &&
                   date.getDate() === dayDate.getDate() ){
                    
                    day.data.push(obj);            
                }
            }
        }
    }

    function runExternalsFunctions(newMonth){
        if(props.onSelectMonthEvent === undefined || 
           props.onSelectMonthEvent === null){
            return;
        }

        let dateData = {
            initialDate: new Date(newMonth),
            endDate: new Date(newMonth)
        }

        props.onSelectMonthEvent(dateData);
    }



    function handleNextMonth(date){
        let newMonth = new Date(date);
        newMonth.setMonth(newMonth.getMonth() + 1)
        setSelectedDate(newMonth);
        runExternalsFunctions(newMonth);

    }

    function handlePreviousMonth(date){
        let newMonth = new Date(date);
        newMonth.setMonth(newMonth.getMonth() - 1)
        setSelectedDate(newMonth);
        runExternalsFunctions(newMonth);

    }

    function creationDates(date){
        let dates = {
            beforeMonthDays: null,
            currentMonthDays: null,
            afterMonthDays: null,
            currentMonthDays: null
        }

        dates.currentMonthDays = new Date(date.getFullYear(), date.getMonth(), 1);
        dates.currentMonthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        return dates;
    }

    const PREV_BUTTON_ICON = ConfigSingleton.getInstance().getIcons()["prevButtom"];
    const NEXT_BUTTON_ICON = ConfigSingleton.getInstance().getIcons()["nextButtom"];
    const LOGO_ICON = ConfigSingleton.getInstance().getIcons()["logo"];

    return(
        <div className={style.calendar}>
            <div className={style.calendarHeader}>
                <i className={style.calendarHeaderLogo + " " + LOGO_ICON}></i>
                <div className={style.calendarDateDisplay}>
                    {/* <img src={CalendarIcon} alt="Calendar Icon" /> */}
                    <i className={PREV_BUTTON_ICON} onClick={() => {handlePreviousMonth(selectedDate)}}></i>
                        <h3>{PTMonths[selectedDate.getMonth()]}/{selectedDate.getFullYear()}</h3>
                    <i className={NEXT_BUTTON_ICON} onClick={() => {handleNextMonth(selectedDate)}}></i>
                </div>
            </div>
            <div className={style.calendarAreaDays}>
                <table>
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>D</th>
                            <th style={{textAlign:"center"}}>S</th>
                            <th style={{textAlign:"center"}}>T</th>
                            <th style={{textAlign:"center"}}>Q</th>
                            <th style={{textAlign:"center"}}>Q</th>
                            <th style={{textAlign:"center"}}>S</th>
                            <th style={{textAlign:"center"}}>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateCalendar(selectedDate).map((object, index) => {
                            return(<Week key={index} week={object} />)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar;