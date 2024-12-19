import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchProductDetails } from '../../../store/slices/productSlice';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedProduct, loading, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !selectedProduct) {
    return <ErrorMessage message={error || 'Product not found'} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImages images={selectedProduct.images} />
        <ProductInfo product={selectedProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;