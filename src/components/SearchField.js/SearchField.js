import React from "react";
import "./SearchField.css";

class SearchField extends React.Component {

    state = { searchTerm: "", searchResults: null }

    onChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onSearch(e, this.state.searchTerm);
          }
    }

    render() {
        return (
            <>
            <div className="ui action input">
                <input type="text" placeholder="Search..." onChange={(e)=>this.onChange(e)} onKeyPress={(e)=>this.onKeyPress(e)}/>
                <button className="ui button" onClick={(e)=>this.props.onSearch(e, this.state.searchTerm)}>Search</button>
            </div>
            </>
        )
    }
}

export default SearchField;