import TodoListItem from "./TodoListItem";
import './TodoList.scss'
                //여기의 todos는 app.js에서 넘어온 props로 변화가 있을 때
const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList"> 
            <div className="TodoList">
                {todos.map(todo => (
                    //여기서 그리고 TodoListItem으로 값을 넘긴다. 그 값은 todo하고 id, remove, toggle
                    //그럼 여기서는 아이템 자체가 랜더링 되는것이 아니라 TodoListItem에서 자세한 내용을 랜더링한다.
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle = {onToggle}/>
                ))}
            </div>
        </div>
    );
};

export default TodoList;