import React from "react";
import "./App.css";
type ButtonType = {
    name : string
    buttonAction : ()=>void
}


function Button(props: ButtonType) {
    return(
        <div>
            <button className="btn" onClick={props.buttonAction}>{props.name}</button>
        </div>
    )
}
export default Button;