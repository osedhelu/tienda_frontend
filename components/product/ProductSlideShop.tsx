import { FC } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import { Box } from "@mui/material";

interface props {
  images: string[];
}

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};
export const ProductSlideShow: FC<props> = ({ images }) => {
  if (images.length == 0) return <>...Loadding</>;
  return (
    <Slide
      {...properties}
      slidesToScroll={1}
      slidesToShow={1}
      indicators={true}
    >
      {images.map((img, index) => {
        const url = `/products/${img}`;
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 650,
            }}
          >
            <Image alt="Mountains" src={url} width={600} height={600} />
          </Box>
        );
      })}
    </Slide>
  );
};

/**
 * 
 *  <div
              style={{
                height: "40rem",
                width: "40rem",
                position: "relative",
                float: "left",
                overflow: "hidden",
                background: "red",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={index}
            >
              <Image
                alt="Mountains"
                src={url}
                layout="fill"
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                    flo
                }}
                sizes="(min-width: 75em) 33vw,
                        (min-width: 48em) 50vw,
                        100vw"
              />
            </div>

 */
