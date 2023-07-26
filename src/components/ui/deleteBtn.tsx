import { useAppDispatch } from "@/app/store/hooks";
import { deleteProductFromCart } from "@/app/store/slices/cartSlice";
import { useDeleteDataInCartMutation } from "@/app/store/slices/services/cartapi";
import { Trash2 } from "lucide-react";

const DeleteBtn = ({ id }: any) => {
  const [deleteCart, { error, isSuccess }] = useDeleteDataInCartMutation();
  const dispatch = useAppDispatch();

  // Function to handle the delete action
  const handleDeleteClick = () => {
    try {
      dispatch(deleteProductFromCart({ id: id }));
      deleteCart(id);
    } catch (err) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>
        <Trash2 />
      </button>
    </div>
  );
};

export default DeleteBtn;
