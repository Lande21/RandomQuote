import React, {useState, useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './quotedisplay.css'; 

function UnsplashGallery(){
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=EpERVyPUpKNyRmEe-B6ShDQps5sZWmR0dqYToy1iPDk');
                
                if(response.ok) {
                    const data = await response.json();
                    setImages(data);
                }else{
                    throw new Error('Error fetching images from Unsplash APIs');

                }
                
            }catch(error){
                console.error('error:', error);
            }
            
        };
        fetchImages();
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 images at a time
        slidesToScroll: 1,
        centerMode: true,
      };
    return (
        <div>
          <h2><center>The Unsplash Gallery</center></h2>
          <Slider  {...sliderSettings}>
        {images.map(image => (
          <div key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </Slider>
        </div>
      );
}
    
export default UnsplashGallery;