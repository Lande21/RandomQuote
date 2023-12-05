import { useState, useEffect } from "react";
import axios from "axios";

const Cat = () => {
    const [catImage, setCatImage] = useState('');

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search');
                setCatImage(response.data[0].url);
            }catch(error){
                console.error('Error fetching cat image:', error);
            }
            
        };
        fetchCatImage();
    }, []);
    return (
        <div>
            <img src={catImage} alt="Random Cat" style={{maxWidth: '100%'}} />
        </div>
    );
};
export default Cat;