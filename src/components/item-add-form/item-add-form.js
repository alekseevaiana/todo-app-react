import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  render() {
    return (
      <div
        className="bottom-panel d-flex">

        <input type="text"
          className="form-control new-todo-label"
          placeholder="What needs to be done?"/>

        <button type="submit"
          className="btn btn-outline-secondary">Add
        </button>
      </div>
    );
  }
}
