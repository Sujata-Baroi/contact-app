import React from "react";
import user from "../images/user.png";//user default image

const ContactCard = (props) => {
    //destructuring so that we don't need to use props.parameter.field
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div >{email}</div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => {
                    props.clickHandler(id);//return id
                }}
            ></i>
        </div>
    );
};

export default ContactCard;