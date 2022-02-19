import React from 'react';
import noimage from '../../noimage.jpg';

class ResultCard extends React.Component { 

    render() {
        return (
            <div className="ui card centered">
                <div className="image">
                    <img alt={this.props.title} src={this.props.cover || noimage}/>
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