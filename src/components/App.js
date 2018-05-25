import React from 'react';
import SearchBar from './SearchBar';
import List from './List';
import request from 'superagent';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(term) {
        
const url = `https://newsapi.org/v2/everything?q=${term.replace(/\s/g, '&')}?&sortBy=publishedAt&apiKey=24b838b1e8844480bf9c143972240718`;

        request.get(url, (err, res) => {
            this.setState({ data: res.body.articles });
            console.log(res.body.articles);
        });
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={term => this.handleTermChange(term)}/>
                <List data={this.state.data} />
            </div>
        );
    }
}

export default App;
// Property to pass search term [√]
