import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./modules/todos";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const TodosContainer = () => {

  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const onCreate = useCallback((text) => {
    dispatch(addTodo(text))
  }, [dispatch]);

  const onRemove = useCallback((id) => {
    dispatch(removeTodo(id))
  }, [dispatch]);

  const onToggle = useCallback((id) => {
    dispatch(toggleTodo(id))
  }, [dispatch]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onCreate={onCreate}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default TodosContainer;
