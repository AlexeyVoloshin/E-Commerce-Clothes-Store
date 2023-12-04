'use client';
import React from 'react';
import { Button } from './Button';
import { ProductCartType } from '@/types/propsType';
import { runInAction } from 'mobx';
import cartStore from '@/store/CartStore';
import { SingleCartResponseType } from '@/types/response';

export default function AddProductToCartForm({
  serverAction,
  ...data
}: ProductCartType & {
  serverAction: (
    data: any
  ) => Promise<{ props: { data: SingleCartResponseType } }>;
}) {
  const handleSubmit = async () => {
    const { props } = await serverAction(data);
    console.log('result: ', props);
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
