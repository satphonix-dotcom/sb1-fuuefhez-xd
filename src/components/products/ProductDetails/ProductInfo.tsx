import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { addItem } from '../../../store/slices/cartSlice';
import { Product } from '../../../types/product';
import { formatPrice } from '../../../utils/formatters';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <p className="text-3xl text-gray-900">{formatPrice(product.price)} USDC</p>
      
      <div className="prose max-w-none">
        <p>{product.description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className="w-full bg-yellow-400 text-gray-900 py-3 px-8 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductInfo;