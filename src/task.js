import React, { useState, useEffect, useRef } from 'react';
import GetItDone from './images/getitdon2.svg';
import { Link } from 'react-router-dom';

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
      <Link className="link" to="/">
        Clock
      </Link>
       <div className="task-main-margin">
        <div className="task-main">
          <label>
            {' '}
            <img src={GetItDone} className="header-image" />
          </label>
          <div className="input-main">
            <input
              maxlength="15"
              max="5"
              type="text"
              name="name"
              ref={ref}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-btn-main">
              <button className="input-btn" onClick={handleBtn}>
                +
              </button>
            </div>
          </div>
          <div className="list-items-main">
            {items.map((item, id) => {
              return (
                <div className="list-items">
                  <li
                    className="list"
                    id={id}
                    onClick={handleFinish}
                    style={
                      item.isCompleted
                        ? { textDecoration: 'line-through', color: 'white' }
                        : { textDecoration: 'none' }
                    }
                  >
                    {item.value}
                  </li>
                  <div className="btn-delete-main">
                    <button className="task-delete" onClick={handleDelete}>
                      {' '}
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
