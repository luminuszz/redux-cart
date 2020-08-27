import { SelectEffect } from 'redux-saga/effects';

export enum ActionsTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface IProductDTO {
  id: number;
  title: string;
  price: number;
}

export interface ICartItemDTO {
  product: IProductDTO;
  quantity: number;
}

export interface ICartStateDTO {
  items: ICartItemDTO[];
  failedStockCheck: number[];
}

export interface Action<T> {
  type: string;
  payload: Record<string, T>;
}

export type SagaMiddlewareType<T> = Generator<SelectEffect, void, T>;
