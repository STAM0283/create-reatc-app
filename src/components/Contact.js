import React from "react";
import "./contact.css";


const Contact = (props) => {
    console.log(props); 
    return(
        <div className="Contact">
            <img className="avatar" src={props.props.contacts.avatar} alt=""/>
            <h6 className="name">{props.props.contacts.name}</h6>
            <div className={props.props.contacts.online? "status-online" : "status-offline"}></div>

        </div>
    )
}


export default Contact; 