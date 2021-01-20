import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap"
export default function Home(){
    return(<div className="home-page">
    <div><b>Instructions</b></div>
    <div>
        <ul>
            <li>Drag Mouse or finger to move.</li>
            <li>Double click on location to point marker.</li>
            <li>Click on marker to get photos taken at that location.</li>
            <li>Use mouse Scroller or two fingers to Zoom in and out Respectively.</li>
        </ul>
    </div>
    <Link to="/map"><Button>Enter Maps</Button></Link>
    </div>)
}