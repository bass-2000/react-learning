import React from 'react';
import ReactDOM from 'react-dom';
import css from './main.scss'

const App = () => <p>Hello world</p>;
App.apply(css);
ReactDOM.render(<App/>, document.getElementById("root"));