import React from 'react';
import noCoverAvailable from '../../noimage.jpg';
import ShowMoreText from "react-show-more-text";

class ResultCard extends React.Component {

    returnBookCover = () => {
        return this.props.cover ? `https${this.props.cover.slice(4)}` : noCoverAvailable;
    }

    render() {
        return (
            <div className="ui card centered">
                <div className="image">
                    <img alt={this.props.title} src={this.returnBookCover()} />
                </div>
                <div className="content">
                    <h3 className="header">{this.props.title}</h3>
                    <ShowMoreText
                        lines={10}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="my-anchor-css-class"
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={0}
                        truncatedEndingComponent={"... "}
                    >
                        {this.props.description}
                    </ShowMoreText>
                </div>
            </div>
        )
    }

}

export default ResultCard;