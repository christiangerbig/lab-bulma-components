import React from "react";
import "bulma/css/bulma.css";

const CoolButton = props => {
    let buttonClass = "";
    if (props.className) {
        buttonClass += props.className; 
    }
    buttonClass += " button";
    if (props.isSmall) {
        buttonClass += " is-small";
    }
    if (props.isDanger) {
        buttonClass += " is-danger";
    }
    if (props.isSuccess) {
        buttonClass += " is-success";
    }
    if (props.isPrimary) {
        buttonClass += " is-primary";
    }
    return (
        <React.Fragment>
            <button className={buttonClass}>{props.children}</button>
        </React.Fragment>
    );
}

export default CoolButton;