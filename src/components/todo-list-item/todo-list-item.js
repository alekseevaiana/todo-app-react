import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {


  render() {
    const {label, onLabelClick, onImportantBtn, onDelete, important, done} = this.props;
    let classNames = 'todo-list-item';

    if (important) {
      classNames = classNames + ' important';
    }

    if (done) {
      classNames = classNames + ' done';
    }

    return (
      <span className={classNames}
      >
      <span
        className="todo-list-item-label"
        onClick={onLabelClick}
      >{label}</span>
      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportantBtn}
      >
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}
      >
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
    );
  }
}

