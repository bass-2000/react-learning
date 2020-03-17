import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <p>Hello World</p>

class AppTwo {
    run = (name = "World") => {
        console.log(`Hello ${name}`);
        console.log([1, 2, [3, 4]].flat());
    };
}

const app = new AppTwo();
app.run();

ReactDOM.render(<App/>, document.getElementById("root"));