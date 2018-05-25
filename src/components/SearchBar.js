import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' };
    }
    

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;

// makes our SearchBar update state [√]
// create a new state object when SearchBar initializations