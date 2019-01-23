import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({items, onLabelClick, onImportantBtn, onDelete}) => {

  const elements = items.map((item) => {
    return (
      <li className="list-group-item"
        key={item.id}>
        <TodoListItem
          label={item.label}
          important={item.important}
          done={item.done}
          onLabelClick={() => onLabelClick(item.id)}
          onImportantBtn={() => onImportantBtn(item.id)}
          onDelete={() => onDelete(item.id)}
        /></li>
    )
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;