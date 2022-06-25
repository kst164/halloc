import React, { Component } from 'react';
import FloorStats from './floorStats';
import './stats.css'

class Stats extends Component{
    render(){
        return(
            <div className = 'side-nav'>
                {/* Title */}
                <h5 className = 'side-nav-txt'>Stats:</h5>

                {/* Floor Details */}
                {this.props.floors.map((element) =>
                    <FloorStats
                        key = {element.level}
                        myFloor = {element}
                        selectFloor = {this.props.selectFloor}
                        currentLevel = {this.props.currentLevel}
                    />    
                )}

                {/* Legends */}
                <h5>Legend:</h5>
                <div className = 'alert alert-primary'>Rooms Available</div>
                <div className = 'alert alert-warning'>Rooms Booked</div>
                <div className = 'alert alert-secondary'>Rooms Occupied</div>

            </div>
            
        )
    }
}

export default Stats;