import React from "react";
import "./Venues.css";
import chidambaramImage from "../Images/chidambaram.jpg"; // Import local image
import EdenGardensImage from "../Images/EdenGardens.jpg"; // Import local image
import WankhedeStadiumImage from "../Images/WankhedeStadium.jpg"; // Import local image
import ChinnaswamyStadiumImage from "../Images/ChinnaswamyStadium.jpg"; // Import local image
import ArunJaitleyStadiumImage from "../Images/ArunJaitleyStadium.jpg"; // Import local image
import DYPatilStadiumImage from "../Images/DYPatilStadium.jpg"; // Import local image
import NarendraModiStadiumImage from "../Images/NarendraModiStadium.jpg"; // Import local image

const venues = [
  {
    name: "M. A. Chidambaram Stadium",
    location: "Chennai",
    imageUrl: chidambaramImage, // Use imported image
  },
  {
    name: "Eden Gardens",
    location: "Kolkata",
    imageUrl: EdenGardensImage,
  },
  {
    name: "Wankhede Stadium",
    location: "Mumbai",
    imageUrl: WankhedeStadiumImage,
  },
  {
    name: "M. Chinnaswamy Stadium",
    location: "Bengaluru",
    imageUrl: ChinnaswamyStadiumImage,
  },
  {
    name: "Arun Jaitley Stadium",
    location: "Delhi",
    imageUrl: ArunJaitleyStadiumImage,
  },
  {
    name: "DY Patil Stadium",
    location: "Navi Mumbai",
    imageUrl: DYPatilStadiumImage,
  },
  {
    name: "Narendra Modi Stadium",
    location: "Ahmedabad",
    imageUrl: NarendraModiStadiumImage,
  },
];

const Venues = () => {
  return (
    <div className="venues-container">
      <h1 className="venues-title">IPL Venues</h1>
      <div className="venues-grid">
        {venues.map((venue, index) => (
          <div key={index} className="venue-card">
            <img
              src={venue.imageUrl}
              alt={`Image of ${venue.name}`}
              className="venue-image"
            />
            <div className="venue-info">
              <h2 className="venue-name">{venue.name}</h2>
              <p className="venue-location">{venue.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;
