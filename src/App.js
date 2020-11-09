import React, { useCallback, useState } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

const todoList = [
  {
    id: 1,
    text: 'redux',
    checked: true,
  },
  {
    id: 2,
    text: 'contextApi',
    checked: true,
  },
  {
    id: 3,
    text: 'mobX',
    checked: false,
  },
]

const App = () => {

  const [todos, setTodos] = useState(todoList);

  const [nextId, setNextId] = useState(4);

  const handlePlus = useCallback((text) => {
    const nextTodo = {
      id: nextId,
      text,
    }
    setTodos(todos.concat(nextTodo));
    setNextId(nextId + 1);
  }, [nextId, todos]);

  const handleRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const handleToggle = useCallback((id) => {
    setTodos(todos.map(todo => todo.id === id
      ? {...todo, checked: !todo.checked}
      : todo
    ));
  }, [todos]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onPlus={handlePlus}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;
