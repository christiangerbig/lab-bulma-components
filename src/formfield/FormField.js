import React from "react";
import "bulma/css/bulma.css";

const FormField = props => {
    return (
        <React.Fragment>
        <div className="field">
        <label className="label">{props.label}</label>
            <div class="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>        
        </div>
        </React.Fragment>
    );
}

export default FormField;