import { IProductDTO, Action, ActionsTypes } from '../dtos';

export function addProductToCartSuccess(
  product: IProductDTO,
): Action<IProductDTO> {
  return {
    type: ActionsTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}
export function addProductToCartRequest(
  product: IProductDTO,
): Action<IProductDTO> {
  return {
    type: ActionsTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}
export function addProductToCartFailure(productId: number): Action<number> {
  return {
    type: ActionsTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
