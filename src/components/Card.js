import React from "react";
import icon from "./../images/icon.png";

export default function Card({
  id,
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="card">
      <img src={imageUrl} alt={location} className="card--image" />
      <div className="card--details">
        <div className="card--details--location">
          <img src={icon} className="card--details--icon" alt="icon" />
          <span className="card--details--country">
            {location.toUpperCase()}
          </span>
          <a href={googleMapsUrl} className="card--details--link">
            View on Google Maps
          </a>
        </div>
        <div className="card--details--title">{title}</div>
        <div className="card--details--date">
          {startDate} - {endDate}
        </div>
        <div className="card--details--description">{description}</div>
      </div>
    </div>
  );
}
