import {MdAdd} from 'react-icons/md'
import {useState, useCallback} from 'react'
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
    //입력하는 값을 관리
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault(); // ?
        },
        [onInsert, value], //onInsert나 value에 변동이 생기면 작동한다.
    )

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요'
                    value={value}
                    onChange={onChange}/>
                <button type='submit'>
                    <MdAdd />
                </button>
        </form>
    );
};

export default TodoInsert;