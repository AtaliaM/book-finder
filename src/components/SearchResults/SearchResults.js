import React from 'react';
import ResultCard from '../ResultCard/ResultCard';

class SearchResults extends React.Component {
    
    renderResultList = () => {
        console.log(this.props)

        return ( 
            this.props.results.map((result)=> {
                return (
                    <div className="ui segment">
                        <ResultCard title={result.volumeInfo.title} cover={(result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.thumbnail) || ""} description={result.volumeInfo.description}/>
                    </div>
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