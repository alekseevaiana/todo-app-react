import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  render() {
    return (
      <div
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>

        <input type="text"
          className="form-control new-todo-label"
          placeholder="What needs to be done?"/>

        <button type="submit"
          onClick={() => this.props.onItemAdded('Hello')}
          className="btn btn-outline-secondary">Add
        </button>
      </div>
    );
  }
}
