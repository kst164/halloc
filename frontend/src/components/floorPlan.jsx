import React, { Component } from 'react';
//import './floorPlan.css'

class FloorPlan extends Component {
    //Function to generate text
    generateText(){
        if(this.props.currentLevel !== null){
            return("Currently on Floor#" + this.props.currentLevel);
        }
        else{
            return("Please Select a Floor!!!")
        }
    }
    
    render() { 
        return (
            <div className = 'main-text'>
                <h5>The Pattern Goes Here...</h5>
                <div>{this.generateText()}</div>
            </div>
        );
    }
}
 
export default FloorPlan;