import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'store';
import { addProductToCartRequest } from 'store/modules/Cart/actions';
import { IProductDTO } from 'store/modules/Cart/dtos';

interface CatelogItemProps {
  product: IProductDTO;
}

const CatalogItem: React.FC<CatelogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  console.log(hasFailedStockCheck);

  return (
    <article>
      <strong>{product.title}</strong>

      <span>{product.price}</span>

      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>

      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
