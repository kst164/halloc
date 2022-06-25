import React from 'react';
import './Rooms.css';

// const HoverText = () => {
//   return (
//     <div>
//       Test
//     </div>
//   );
// };


export default class Room extends React.Component {
    
  constructor(props) {
    super(props);
    //this.handleMouseOver = this.handleMouseOver.bind(this);
    //this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouse() {
    let isHovering = !this.state.isHovering;
    this.setState({
      isHovering: isHovering
    });
  }
  
    render()
    {
        if(this.props.value === 0){
        return (
        <button
          className="room0"
          onClick={() => this.props.onClick()
          }
          onMouseEnter={() => {this.handleMouse(); console.log("Just entered somewhere!!")}}
          onMouseOut={() => {this.handleMouse(); console.log("Just left somewhere!!")}}
        >

        {this.props.roomno}
        {this.state.isHovering && 
        <div className='hoverbox'>
          <h4 className='hoverbox-head'>Room Number: {this.props.roomno}</h4> 
          <ul className='hoverbox-ul'>
            <li className='hoverbox-li'><span className='hoverbox-span'>Occupant 1:</span></li>
            <li className='hoverbox-li'><span className='hoverbox-span'>Occupant 2:</span></li>
          </ul>
        </div>
          // <div>Test</div>
        }
      </button>
        );}

        else if(this.props.value === 1){
            return (
            <button
            className="room1"
            onClick={() => this.props.onClick()}
          >
            {this.props.roomno}
          </button>
            );}
        else {
            return (
            <button
            className="room2"
            onClick={() => this.props.onClick()}
            >
            {this.props.roomno}
            </button>
            );}
    }
}

// export default class Pod extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             rooms: Array(3).fill(0),
//         };
//     }

//     handleClick(i){
//         const rooms = this.state.rooms.slice();
//         if(rooms[i]<=1) rooms[i]++;
//         this.setState({rooms: rooms});
//     }
    
    
    
//     renderRoom(i){
//         return(
//             <Room
//              value={this.state.rooms[i]}
//              onClick={() => this.handleClick(i)}
//              />
//         );
//     }

//     render()
//     {
//         return(
//             <div className="pod">
//                 {this.renderRoom(0)}
//                 {this.renderRoom(1)}
//                 {this.renderRoom(2)}
//             </div>
//         );
//     }

// }