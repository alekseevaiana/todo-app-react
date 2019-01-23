import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  state = {
    items: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Learn React', important: false, done: false },
      { id: 3, label: 'Make Awesome App', important: false, done: false }
    ]
  };

  toggleProps = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
}

  onLabelClick = (id) => {
    this.setState(({items}) => {
      // const idx = items.findIndex((item) => item.id === id);
      // const oldItem = items[idx];
      // const newItem = {...oldItem, done: !oldItem.done};
      //
      // const newArray = [
      //   ...items.slice(0, idx),
      //   newItem,
      //   ...items.slice(idx + 1)
      // ];
      //
      // return {
      //   items: newArray
      // }
      return {
        items: this.toggleProps(items, id, 'done')
      }
    })
  };

  onImportantBtn = (id) => {
    this.setState(({items}) => {
      return {
        items: this.toggleProps(items, id, 'important')
      }
    })
  };

  onDelete = (id) => {
    this.setState(({items}) => {
      const idx = items.findIndex((item) => item.id === id);
      const newArray = [
        ...items.slice(0, idx),
        ...items.slice(idx + 1)
      ]

      return {
        items: newArray
      }
    })
  };

  render() {

    return (
      <div className="todo-app">
        <AppHeader/>

        <div className="search-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          items={this.state.items}
          onLabelClick={this.onLabelClick}
          onImportantBtn={this.onImportantBtn}
          onDelete={this.onDelete}
        />
        <ItemAddForm/>
      </div>
    );
  }
}

