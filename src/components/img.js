import React from "react";
export default function Img(props){

    return (<div >
        <div className='img-render'>
    <img alt-="photos" className="images" alt={props.alt} src={props.source}/>
    </div>
    </div>)
}
