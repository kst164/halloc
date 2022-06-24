import React from 'react';
import Room from  './Rooms.jsx';
import './Floors.css';

export default class Floor extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
        rooms: Array(24).fill(0),
        available: 24,
        booked: 0,
        occupied: 0,
        floorno: 5,
      };
  }
  
  handleClick(i){
    const rooms = this.state.rooms.slice();
    let available = this.state.available;
    let booked = this.state.booked;
    let occupied = this.state.occupied;
      if(rooms[i] === 0)
      {
        rooms[i]++;
        available--;
        booked++;

      }
      else if(rooms[i] === 1)
      {
        rooms[i]++;
        booked--;
        occupied++;

      }

        this.setState({
          rooms: rooms,
          available: available,
          booked: booked,
          occupied: occupied,
        });
  }
  

  renderRoom(i){
    return(
        <Room
         roomno = {this.state.floorno*24+i+1}
         onClick = {() => this.handleClick(i)}
         value = {this.state.rooms[i]}
         />
    );
  }

  renderPod(i){
    return(
      <div className="pod">
          {this.renderRoom(3*i+0)}
          {this.renderRoom(3*i+1)}
          {this.renderRoom(3*i+2)}
      </div>
  );
  }

    
  render(){
    return(
      <div className="floor">
        {/* <div className = "left-wing">
          <div className="side">
            {this.renderPod(0)}
            <div className='testleft'>{this.renderPod(1)}</div>
          </div>
          <div className="side">
          <div className='testleft'>{this.renderPod(2)}</div>
          {this.renderPod(3)}
        </div>
      </div>
      <div className = "right-wing">
          <div className="side">
          {this.renderPod(4)}
          <div className='testright'>{this.renderPod(5)}</div>
          </div>
          <div className="side">
          <div className='testright'>{this.renderPod(6)}</div>
          {this.renderPod(7)}
        </div>
      </div> */}

        <div className='grid-item'></div>
        <div className='grid-item tobottom' id='toleft1'>{this.renderPod(2)}</div>
        <div className='grid-item tobottom' id='toright1'>{this.renderPod(1)}</div>
        <div className='grid-item'></div>
        <div className='grid-item'>{this.renderPod(3)}</div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'>{this.renderPod(0)}</div>
        <div className='grid-item'>{this.renderPod(7)}</div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'>{this.renderPod(4)}</div>
        <div className='grid-item'></div>
        <div className='grid-item totop' id='toleft2'>{this.renderPod(6)}</div>
        <div className='grid-item totop' id='toright2'>{this.renderPod(5)}</div>
        <div className='grid-item'></div>
     
      </div>
    );
  }
}
  