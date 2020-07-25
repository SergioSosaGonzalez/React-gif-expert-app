import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__backInLeft">
      <img src={url} alt={title} />
      <p>
        <strong>{title}</strong>
      </p>
    </div>
  );
};

export default GifGridItem;
