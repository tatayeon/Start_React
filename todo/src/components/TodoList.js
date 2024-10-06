import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({todos}) => {
    return (
        <div className="TodoList"> 
            <div className="TodoList">
                {todos.map(todo => (
                    <TodoListItem todo={todo} key={todo.id}/>
                ))}
            </div>
        </div>
    );
};

export default TodoList;