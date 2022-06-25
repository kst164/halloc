import React, { Component } from 'react';
import Stats from '../Components/stats';
import FloorPlan from '../Components/floorPlan';
import NavBar from '../Components/NavBar/navBar';
import './grid.css'

class Grid extends Component {
     
    render() { 
        return (
            <div className = 'container'>
                <div className = 'header'>
                    <NavBar/>
                </div>
                
                <div className = 'main'>
                <div className = 'column1'>
                <Stats
                        floors = {this.props.floors}
                        selectFloor = {this.props.selectFloor}
                        currentLevel = {this.props.currentLevel}
        /></div>
                <div className = 'column2'>
                <FloorPlan
                        currentLevel = {this.props.currentLevel}
                />
                </div>
                </div>

            </div>
        );
    }
}
 
export default Grid;