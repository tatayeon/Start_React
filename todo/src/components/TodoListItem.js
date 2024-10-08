import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames'

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo; //?
    //여기서는 TodoList에 넘어온 값으로 아이템을 조합해서 랜더링한다?

    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
