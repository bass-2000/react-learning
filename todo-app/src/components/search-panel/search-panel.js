import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        searchWord: ''
    };

    onSearchChanged = (e) => {
        const searchWord = e.target.value;
        this.setState({searchWord});
        this.props.onSearchChanged(searchWord);
    };

    render() {
        return (<input type="text"
                       className="form-control search-input"
                       placeholder="type to search"
                       value={this.state.searchWord}
                       onChange={this.onSearchChanged}/>);
    }
}


