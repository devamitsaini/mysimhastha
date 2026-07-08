  import { useState } from "react";
  import {
    FiHeart,
    FiCamera,
    FiX,
    FiChevronLeft,
    FiChevronRight,
  } from "react-icons/fi";
  import "./StayGallery.css";

  export default function StayGallery({ stay }) {

    const images = [
      stay.image,
      stay.featured_image,
      stay.image2,
      stay.image3,
      stay.image4,
    ].filter(Boolean);

    const gallery =
      images.length > 0
        ? [...new Set(images)]
        : ["/images/mahakal-lok.webp"];

    const [heroImage, setHeroImage] = useState(gallery[0]);

    const [open, setOpen] = useState(false);

const [current, setCurrent] = useState(0);

function openGallery(index){

setCurrent(index);

setHeroImage(gallery[index]);

setOpen(true);

}

function next(){

const i=(current+1)%gallery.length;

setCurrent(i);

setHeroImage(gallery[i]);

}

function prev(){

const i=(current-1+gallery.length)%gallery.length;

setCurrent(i);

setHeroImage(gallery[i]);

}
    return (

      <section className="stay-gallery">

        <div
className="gallery-main"
onClick={()=>openGallery(current)}
>

          <img
            src={heroImage}
            alt={stay.name}
          />

          <button className="gallery-wishlist">
            <FiHeart />
          </button>

          <button
className="gallery-view-all"
onClick={(e)=>{

e.stopPropagation();

setOpen(true);

}}
>

            <FiCamera />

            {gallery.length} Photos

          </button>

        </div>

        {gallery.length > 1 && (

          <div className="gallery-side">

            {gallery.slice(1,5).map((img,index)=>(

              <div
                key={index}
                className="gallery-thumb"
                onClick={()=>{

setHeroImage(img);

setCurrent(index+1);

}}
              >

                <img
                  src={img}
                  alt=""
                />

                {index===3 && gallery.length>5 && (

                  <div className="gallery-more">

                    +{gallery.length-4}

                  </div>

                )}

              </div>

            ))}

          </div>

        )}

        {open && (

<div className="gallery-modal">

<button
className="gallery-close"
onClick={()=>setOpen(false)}
>

<FiX/>

</button>

<button
className="gallery-prev"
onClick={prev}
>

<FiChevronLeft/>

</button>

<img

src={heroImage}

alt=""

/>

<button
className="gallery-next"
onClick={next}
>

<FiChevronRight/>

</button>

<div className="gallery-counter">

{current+1} / {gallery.length}

</div>

</div>

)}

      </section>

    );

  }