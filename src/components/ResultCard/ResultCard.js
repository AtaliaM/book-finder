import React from 'react';
import noimage from '../../noimage.jpg';
import ShowMoreText from "react-show-more-text";

class ResultCard extends React.Component {

    // executeOnClick(isExpanded) {
    //     console.log(isExpanded);
    // }

    render() {
        return (
            <div className="ui card centered">
                <div className="image">
                    <img alt={this.props.title} src={this.props.cover || noimage} />
                </div>
                <div className="content">
                    <h3 className="header">{this.props.title}</h3>
                    {/* <div className="description">
                        {this.props.description}
                    </div> */}
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