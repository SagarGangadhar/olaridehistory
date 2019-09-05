import React from 'react'
import './style.css'

function MyRides(props){
    //console.log(props);
    let data = props.items;
    console.log(data); 
    return(
        <div className="rideHistory">
            <div className="image">
            <img src={data.ride} alt="share" className="cab-img"/>
            </div>
            <div className="content">
                <div className="date">
                    {data.date}
                </div>
                <div className="ride-receipt">
                    {data.ridetype} {data.receipt}
                </div>
                <div className="pick-drop">
                   <div className="from dot"></div>
                   <div className="address">{data.pickup}</div> <br/>
                   <div className="to dot"></div>
                   <div className="address">{data.drop}</div> 
                </div>
            </div>
            <div className="fare-img">
                <div className="fare">
                &#8377;{data.fare}
                </div>
                <div className="">
                  <img src ={data.driver} alt="driver" className="driver"/>
                </div>
            </div>
        </div>
    );
}

export default MyRides