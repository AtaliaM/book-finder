import React from 'react';

class ResultCard extends React.Component {

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img alt={this.props.title} src={this.props.cover}/>
                </div>
                <div className="content">
                    <h3 className="header">{this.props.title}</h3>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }

}

export default ResultCard;