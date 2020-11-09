import React, { useCallback, useRef, useState } from 'react';
import '../scss/TodoInsert.scss';
import { MdAdd } from "react-icons/all";

const TodoInsert = ({onPlus}) => {

  const [text, setText] = useState('');

  const handleRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlePlus = useCallback(() => {
    onPlus(text);
    setText('');
    handleRef.current.focus();
  }, [onPlus, text]);

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
