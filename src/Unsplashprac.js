import React, {useState, useEffect} from "react";
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
    return (
        <div>
          <h2><center>Unsplash Gallery</center></h2>
          <div className="image-grid">
            {images.map(image => (
            <div key={image.id} className = "image-item">
                  <img src={image.urls.small} alt={image.alt_description} />
            </div>
            ))}
          </div>
        </div>
      );
}
    
export default UnsplashGallery;