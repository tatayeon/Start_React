import { useCallback, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate"

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리엑트 기초 알아보기',
      checked:true,
    },
    {
      id:2,
      text: '컴포넌트 스타일링',
      checked:true,
    },
    {
      id:3,
      text: '일정 관리앱 만들어보자',
      checked:false
    }
  ]);

  const nextId = useRef(4);

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  )

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle = {onToggle} />
    </TodoTemplate>
  );
};

export default App;
