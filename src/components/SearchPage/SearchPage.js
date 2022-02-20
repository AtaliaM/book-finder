import React from 'react';
import SearchField from '../SearchField.js/SearchField';
import SearchResults from '../SearchResults/SearchResults';
import googleApi from "../../apis/googleApi";

class SearchPage extends React.Component {

    state = { noSearchResults: false, noSearchTermMsg: false, results: [] }

    onSearch = async (e, searchTerm) => {
        e.preventDefault();
        try {
            if(searchTerm.length > 0) {
                const res = await googleApi.get(searchTerm);
                if (res.data.totalItems > 0) {
                    this.setState({ noSearchResults: false, noSearchTermMsg: false, results: [...res.data.items] });
                } else {
                    this.setState({ noSearchResults: true, noSearchTermMsg: false});
                }
            } else {
                this.setState({noSearchTermMsg:true, noSearchResults: false});
            }
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <>
                <SearchField onSearch={this.onSearch} />
                {this.state.noSearchResults ? <div>No results for this term</div> : null}
                {this.state.noSearchTermMsg ? <div>Please enter something to search</div> : null}
                {this.state.results.length > 0 ?
                    <div className="ui segment">
                        <SearchResults results={this.state.results} />
                    </div>
                    : null}
            </>
        )
    }

}

export default SearchPage;