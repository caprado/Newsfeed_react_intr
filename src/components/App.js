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
        const url = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.npr.org%2Frss%2Frss.php%3Fid%3D1001%26searchTerm%3D${term.replace(/\s/g, '')}`;

        request.get(url, (err, res) => {
            this.setState({ data: res.body.items });
            //console.log(url_feedlyOath);
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
