import React from 'react';
import './ImageRow.css';

const ImageRow = () => {
    return (
        <div className="image-row">
            <img src="image1.png" alt="Image 1" className="smallest" />
            <img src="image2.png" alt="Image 2" className="smaller" />
            <img src="image3.png" alt="Image 3" className="small" />
            <img src="image4.png" alt="Image 4" className="biggest" />
            <img src="image5.png" alt="Image 5" className="small" />
            <img src="image6.png" alt="Image 6" className="smaller" />
            <img src="image7.png" alt="Image 7" className="smallest" />
        </div>
    );
};

export default ImageRow;
