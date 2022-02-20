import React from 'react';
import ResultCard from '../ResultCard/ResultCard';

class SearchResults extends React.Component {
    
    renderResultList = () => {

        return ( 
            this.props.results.map((result)=> {
                return (
                    <ResultCard title={result.volumeInfo.title} cover={(result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.thumbnail) || ""} description={result.volumeInfo.description}/>
                )
        })
        )

    }

    render() {
        return (
            this.renderResultList()
        )
    }
}

export default SearchResults;