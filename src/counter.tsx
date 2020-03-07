import React from "react"
import "./App.css"
type PropsType = {
    int : number
}
function Counter(props: PropsType){
    console.log(props);

return(
    <div className="wrap">
        <span  className="counter">{props.int}</span>
    </div>
)
}
export default Counter;