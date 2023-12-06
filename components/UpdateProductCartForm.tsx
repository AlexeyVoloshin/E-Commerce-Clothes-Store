'use client';

import { Dropdowns } from './Dropdowns';
import cartStore from '@/store/CartStore';
import { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';

type UpdateProductCartFormProps = {
  productId: number | string;
  quantity: number;
};

const UpdateProductCartForm: React.FC<UpdateProductCartFormProps> = observer(
  ({ productId, quantity }) => {
    const [selected, setSelected] = useState<string>(String(quantity));
    function handleActionForm(event: ChangeEvent<HTMLSelectElement>) {
      setSelected(event.target.value);
      cartStore.updateProductCart(productId, Number(event.target.value));
    }
    return (
      <Dropdowns
        name="quantity"
        options={[1, 2, 3, 4, 5, 6, 7, 8]}
        value={selected}
        onChange={handleActionForm}
      />
    );
  }
);

export { UpdateProductCartForm };
