import React from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import img1 from "../image/ASPR.png";
import img2 from "../image/UOH-DATABASE.png";


export const Gallery = () => {
    const images = [
        {
          original: img2,
          thumbnail: img2,
        },
        {
          original: img1,
          thumbnail: img1,
        },
      ];

    return (
      <>
        <div className="Gallery">
        <ImageGallery items={images} />
        </div>
      </>
    );
  };
  