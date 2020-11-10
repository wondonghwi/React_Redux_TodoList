import React, { useCallback, useRef, useState } from 'react';
import '../scss/TodoInsert.scss';
import { MdAdd } from "react-icons/all";

const TodoInsert = ({onCreate}) => {

  const [text, setText] = useState('');

  const handleRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlePlus = useCallback(() => {
    onCreate(text);
    setText('');
    handleRef.current.focus();
  }, [onCreate, text]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handlePlus();
    }
  }, [handlePlus]);

  return (
    <div className='TodoInsert'>
      <input type="text"
             onChange={handleChange}
             value={text}
             onKeyPress={handleKeyPress}
             ref={handleRef}
             placeholder='할일 입력'
      />
      <button onClick={handlePlus}>
        <MdAdd/>
      </button>
    </div>
  );
};

export default React.memo(TodoInsert);
