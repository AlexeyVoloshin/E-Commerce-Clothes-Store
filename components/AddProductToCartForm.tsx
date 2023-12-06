'use client';
import React from 'react';
import { Button } from './Button';
import { ProductCartType } from '@/types/propsType';
import { runInAction } from 'mobx';
import cartStore from '@/store/CartStore';
import { addProductsToCart } from '@/services/serverActions';

export default function AddProductToCartForm({
  productId,
  quantity,
}: ProductCartType) {
  const handleSubmit = async () => {
    const { props } = await addProductsToCart({ productId, quantity });
    runInAction(() => {
      cartStore.addCart(props.data);
    });
  };

  return (
    <form
      className="w-full"
      action={handleSubmit}>
      <Button
        type="submit"
        className="w-full">
        Add to bag
      </Button>
    </form>
  );
}

export { AddProductToCartForm };
