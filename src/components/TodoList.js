import React, { useCallback } from 'react';
import '../scss/TodoList.scss';
import cn from 'classnames';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/all";

const TodoList = ({todos, onRemove, onToggle}) => {

  const todoList = useCallback(() => {
    return todos.map(todo =>
      <div className='TodoList' key={todo.id}>
        <div className={cn('checkbox', {checked: todo.checked})} onClick={() => onToggle(todo.id)}>
          {todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          <div className='text'>{todo.text}</div>
        </div>
        <div className='remove' onClick={() => onRemove(todo.id)}>
          <MdRemoveCircleOutline/>
        </div>
      </div>
    )
  }, [onRemove, onToggle, todos]);

  return (
    <>
      {todoList()}
    </>
  );
};

export default React.memo(TodoList);
