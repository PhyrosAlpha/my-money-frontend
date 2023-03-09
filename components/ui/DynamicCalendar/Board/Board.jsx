import style from './style.module.scss';
import Styles from '../EventTypeStyles';
import ConfigSingleton from '../ConfigSingleton';

const Board = (props) => {
    const CLICK_CONTENT_CALLBACK = ConfigSingleton.getInstance().getCallbacks()["clickContent"];

    function showBoard(){
        if(props.show === true){
            return { opacity:0.9, visibility:"visible" }
        }
        if(props.show === false){
            return { opacity:0, visibility:"hidden" }
        }
    }

    function renderElementContent(content, index){
        return(
            <div style={{...Styles[content.eventType]}} 
                className='board-content' 
                key={index}
                onClick={(e) => {handleClickContent(e, content)}}>
                    {content.content}  
            </div>
        )
    }

    function handleClickContent(e, content){
        e.stopPropagation();
        CLICK_CONTENT_CALLBACK(content);
    }

    return (
        <div style={showBoard()} className={style.board}>
            {props.content.map((element, index) => {
                return(
                    renderElementContent(element, index)
                )
            })}
        </div>
    )
}

export default Board;