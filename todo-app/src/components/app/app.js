import React, {Component} from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import './app.css';


export default class App extends Component {

    state = {
        todoData: [
            this.createTodoItem('Drink coffee', {id: 1}),
            this.createTodoItem('Learn React', {id: 2}),
            this.createTodoItem('Build Awesome App', {id: 3})
        ], searchWord: '', filter: 'all'
    };

    createTodoItem(label, {id}) {
        return {
            label: label,
            important: false,
            done: false,
            id: id
        }
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idIndex = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idIndex);
            const after = todoData.slice(idIndex + 1);
            const newArray = [...before, ...after];
            return {
                todoData: newArray
            };
        });
    };
    addItem = (text) => {
        this.setState(({todoData}) => {
            const idx = todoData.slice(-1)[0].id + 1;
            const newItem = this.createTodoItem(text, {id: idx});
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idIndex = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idIndex];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        const before = arr.slice(0, idIndex);
        const after = arr.slice(idIndex + 1);
        return [...before, newItem, ...after];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onSearchChanged = (searchWord) => {
        this.setState({searchWord});
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    search(items, word) {
        if (word.length === 0) {
            return items
        }
        ;
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(word.toLowerCase()) > -1;
        })
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }


    render() {
        const {todoData, searchWord, filter} = this.state;
        const doneCount = todoData
            .filter((el) => el.done).length;
        const filtered = this.filter(this.search(todoData, searchWord), filter);
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChanged={this.onSearchChanged}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList todos={filtered}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}

