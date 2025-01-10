import React from "react";

const ImageSection =({ image,title ,description }) =>{
  
    return (
    <section>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </section>

    )
};
export default ImageSection;