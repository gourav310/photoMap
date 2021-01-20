
import "../style/App.css";
import ReactMapGl, { Marker,Popup } from "react-map-gl"
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"

function App() {
 const history = useHistory();
  const [settings, setsettings] = useState({
    doubleClickZoom: false,
  });
  const [viewPort, setView] = useState({
    latitude: 28.558553737006637,
    longitude: 77.24532297325621,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })
  const [pin, setPin] = useState(null)
  const setmarker = (e) => {
    const [longitude,latitude]= e.lngLat;
    setPin({latitude,longitude})
  }

  const submit = () => {
    console.log("here")
    if(window.confirm("Press ok to see photos taken here")){
      console.log("cliked on comnfirm")
      history.push(`/images/?lat=${pin.latitude}&long=${pin.longitude}`)
    }
  };
  return (
    <div className="App">
      {/* <button onClick={() => setStartButton(!startButton)}> Drop marker<img alt="marker" height="20px" src="https://img.icons8.com/fluent/48/000000/map-pin.png" /></button> */}
      <ReactMapGl {...settings} onDblClick={setmarker} onViewportChange={(viewPort) => setView(viewPort)} mapStyle="mapbox://styles/gouravkhurana/ckk4h6gmc5dsi17jsvxfypkrb" {...viewPort} mapboxApiAccessToken="pk.eyJ1IjoiZ291cmF2a2h1cmFuYSIsImEiOiJja2s0Z2tkNnAwMmlmMnVudHpnY2RobzkwIn0.oKRBg8LqA2DtMRpcs8pQkQ">
      {pin?<><Marker latitude={pin.latitude} longitude={pin.longitude}>
        <div onClick={()=>submit()}>
        {/* {seePhotos?<Popup latitude={pin.latitude} longitude={pin.longitude}> hey i am here</Popup>:null} */}
          <img
                  className="marker"
                  
                  style={{
                    height: `${6 * viewPort.zoom}px`,
                    width: `${6 * viewPort.zoom}px`,
                  }}
                  src="https://i.imgur.com/y0G5YTX.png"
                  alt="marker"
                /></div></Marker></>:null}</ReactMapGl>
     
    </div>
    
  );
}

export default App;
