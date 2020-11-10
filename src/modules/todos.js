//액션타입
import { produce } from "immer";

const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 4;

//액션 함수 선언
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, //id값이 + 된 이후에 id + 1
    text
  },
});
export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

//초기 상태 선언
const initialState = [
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
];

//리듀서 생성
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO :
      return produce(state, draft => {
        draft.push(action.todo);
      })
    case TOGGLE_TODO:
      return produce(state, draft => {
        const todo = draft.find(todos => todos.id === action.id);
        todo.checked = !todo.checked;
      })
    case REMOVE_TODO:
      return produce(state, draft => {
        draft.splice(draft.findIndex(todo => todo.id === action.id), 1);
      })
    default:
      return state;
  }
}
