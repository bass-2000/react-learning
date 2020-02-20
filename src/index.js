import React from "react";
import ReactDOM from 'react-dom';
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const todoData = [
    {label: 'Drink coffee', important: false},
    {label: 'Learn React', important: true},
    {label: 'Build Awesome App', important: false}
]

const App = () => {

    return (<div>

        <AppHeader/>
        <SearchPanel/>
        <TodoList todos={todoData}/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById("root"));