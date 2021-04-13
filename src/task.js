import React, { useState, useEffect, useRef } from 'react';
import GetItDone from './images/getitdone.svg'

export default function Task() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
 
  

  // eslint-disable-next-line
  function handleBtn() {
    if (inputValue !== '') {
      setItems([
        ...items,
        {
          value: inputValue,
          isCompleted: false,
        },
      ]);
      setInputValue('');
    }
  }

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();

    function handleKeydown(e) {
      if (e.code === 'Enter') {
        handleBtn();
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [items, inputValue, handleBtn]);

  function handleFinish(e) {
    const id = e.target.id;

    if (items[id].isCompleted) {
      items[id] = {
        ...items[id],
        isCompleted: false,
      };
      setItems([...items]);
    } else {
      items[id] = {
        ...items[id],
        isCompleted: true,
      };
      setItems([...items]);
    }
  }

  function handleDelete(e) {
    const id = Number(e.target.id);

    const filteredArray = items.filter((item, index) => {
      return index !== id;
    });
    setItems(filteredArray);
  }

  return (
    <div>
    
      <img src={GetItDone} className='header-image'/>
      <div>
          <label>to do</label>
        <input
          type="text"
          name="name"
          ref={ref}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleBtn}>Add</button>
      </div>
      <div>
        {items.map((item, id) => {
          return (
            <div>
              <li
                id={id}
                onClick={handleFinish}
                style={
                  item.isCompleted
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }
                }
              >
                {item.value}
              </li>
              <button  onClick={handleDelete}> -</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
