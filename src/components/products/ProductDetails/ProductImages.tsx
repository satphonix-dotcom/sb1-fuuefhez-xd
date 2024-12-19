import React, { useState } from 'react';
import { ProductImage } from '../../../types/product';

interface ProductImagesProps {
  images: ProductImage[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.url);

  return (
    <div className="space-y-4">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.url}
            onClick={() => setSelectedImage(image.url)}
            className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
              selectedImage === image.url ? 'ring-2 ring-yellow-400' : ''
            }`}
          >
            <img
              src={image.url}
              alt={image.caption || 'Product thumbnail'}
              className="w-full h-full object-center object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;