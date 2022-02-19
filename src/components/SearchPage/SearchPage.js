import React from 'react';
import SearchField from '../SearchField.js/SearchField';
import SearchResults from '../SearchResults/SearchResults';
import googleApi from "../../apis/googleApi";

class SearchPage extends React.Component {

    state = { noSearchResults:false, results: [] }

    onSearch = async(e, searchTerm) => {
        e.preventDefault();
        console.log("innn")
        console.log(searchTerm)
        const res = await googleApi.get(searchTerm);
        if(res.data.totalItems > 0) {
            this.setState({noSearchResults:false, results: [...res.data.items]});
        } else {
            this.setState({noSearchResults:true});
        }
    }

    render() {
        return (
            <>
                <SearchField onSearch={this.onSearch}/>
                {this.state.results.length > 0 ? <SearchResults results={this.state.results} /> : null}
            </>
        )
    }

}

export default SearchPage;