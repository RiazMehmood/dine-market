import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  decrementQuantity,
  incrementQuantity,
} from "@/app/store/slices/cartSlice";

interface IProps {
  id: string;
}

const IncreDecreBtn = ({ id }: IProps) => {
  const dispatch = useAppDispatch();
  const productArray = useAppSelector((state) => state.cart.products);
  const getProductQuantity = (productId: string) => {
    const product = productArray.find((p) => p.product_id === productId);
    return product ? product.quantity : 1;
  };
  const quantity = getProductQuantity(id);

  const incre = () => {
    dispatch(incrementQuantity({ productId: id }));
  };

  const decre = () => {
    dispatch(decrementQuantity({ productId: id }));
  };

  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decre}
        className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
      >
        -
      </button>
      <p className="">{quantity}</p>
      <button
        onClick={incre}
        className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
      >
        +
      </button>
    </div>
  );
};

export default IncreDecreBtn;
