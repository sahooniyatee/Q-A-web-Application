import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOptions.css";
import history from '../Images/history.jpeg';
import Technology from '../Images/Technology.jpeg';
import Science from '../Images/Science.jpeg';
import Coking from '../Images/Coking.jpeg';
import Health from '../Images/Health.jpeg';
import Education from '../Images/Education.jpeg';
import Movies from '../Images/Movies.jpeg';
import Physiology from '../Images/Physiology.jpeg';
// import Movies from '../Images/Movies.jpeg';
function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
         src={history}
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Technology}
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src={Science}
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
         src={Coking}
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
         src={Health}
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
         src={Education}
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
         src={Movies}
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Physiology}
          alt=""
        />
        <p>Movies</p>
      </div>

      {/* <div className="sidebarOption">
        <img
         src={Business}
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Education</p>
      </div> */}
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;