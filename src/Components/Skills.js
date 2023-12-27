import React from "react";

const Skills = () => {
  const images = [
    "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
    "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png",
   
  ];
  return <div>
    {images.map((image)=>(
      <div className="image-box">
        <img src={image} alt="" />
      </div>
    ))}
  </div>;
};

export default Skills;
