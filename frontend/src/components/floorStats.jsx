import React, { Component } from 'react';

class FloorStats extends Component {

    render() { 
        //console.log(this.props.currentLevel, this.props.myFloor.level);
        return (
            <React.Fragment>
                
                {/* Render button */}
                <button
                    className = 'btn btn-primary m-3'
                    onClick = {() => {this.props.selectFloor(this.props.myFloor)}}
                >
                    Floor #{this.props.myFloor.level}
                </button>

                {/* Render Paragraph */}
                <p>
                    <span className = 'alert alert-primary m-3'>{this.props.myFloor.available}</span>
                    <span className = 'alert alert-warning m-3'>{this.props.myFloor.booked}</span>
                    <span className = 'alert alert-secondary m-3'>{this.props.myFloor.occupied}</span>
                </p>

            </React.Fragment>
        );
    }
}
 
export default FloorStats;