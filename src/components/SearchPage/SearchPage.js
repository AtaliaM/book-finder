import React from 'react';
import SearchField from '../SearchField.js/SearchField';
import SearchResults from '../SearchResults/SearchResults';
import googleApi from "../../apis/googleApi";
import './SearchPage.css';

class SearchPage extends React.Component {

    state = { noSearchResults: false, noSearchTermMsg: false, results: [], showLoader: false }

    onSearch = async (e, searchTerm) => {
        e.preventDefault();
        try {
            this.setState({showLoader:true})
            if(searchTerm.length > 0) {
                const res = await googleApi.get(searchTerm);
                if (res.data.totalItems > 0) {
                    this.setState({ noSearchResults: false, noSearchTermMsg: false, results: [...res.data.items], showLoader:false });
                } else {
                    this.setState({ noSearchResults: true, noSearchTermMsg: false, showLoader:false});
                }
            } else {
                this.setState({noSearchTermMsg:true, noSearchResults: false, showLoader:false});
            }
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <>
                <SearchField onSearch={this.onSearch} />
                {this.state.showLoader ? <div className="ui active centered inline loader"></div> : null}
                {this.state.noSearchResults ? <div>No results for this term</div> : null}
                {this.state.noSearchTermMsg ? <div>Please enter something to search</div> : null}
                {this.state.results.length > 0 ?
                    <div className="ui five cards stackable resultsContainer">
                        <SearchResults results={this.state.results} />
                    </div>
                    : null}
            </>
        )
    }

}

export default SearchPage;