/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import produce from 'immer';
import { Reducer } from 'redux';

import { ICartStateDTO, ActionsTypes } from '../dtos';

const INITIAL_STATE: ICartStateDTO = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartStateDTO> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionsTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const findedProductCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (findedProductCartIndex >= 0) {
          draft.items[findedProductCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        return draft;
      }

      case ActionsTypes.addProductToCartFailure: {
        const { productId } = action.payload;

        draft.failedStockCheck.push(productId);

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
