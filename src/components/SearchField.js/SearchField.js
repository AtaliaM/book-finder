import React from "react";
import googleApi from "../../apis/googleApi";

class SearchField extends React.Component {

    state = { searchTerm: "", searchResults: null, noSearchResults: false }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({ searchTerm: e.target.value });
    }

    onSearch = async (e) => {
        e.preventDefault();
        const res = await googleApi.get(this.state.searchTerm);
        if(res.data.totalItems > 0) {
            this.setState({noSearchResults:false, searchResults: res.data.items});
        } else {
            this.setState({noSearchResults:true});
        }
    }

    render() {
        return (
            <>
            <div class="ui action input">
                <input type="text" placeholder="Search..." onChange={(e)=>this.onChange(e)}/>
                <button class="ui button" onClick={(e)=>this.onSearch(e)}>Search</button>
            </div>
            {this.state.noSearchResults ? <div>no results for this term</div> : null}
            </>
        )
    }
}

export default SearchField;