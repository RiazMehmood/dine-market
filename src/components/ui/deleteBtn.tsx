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
<<<<<<< HEAD
      const res = await fetch(`/api/cart?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("Product deleted successfully");
        localStorage.removeItem(`quantity_${id}`);
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("An error occurred while deleting product:", error);
=======
      dispatch(deleteProductFromCart({ id: id }));
      deleteCart(id);
    } catch (err) {
      console.log("error: ", error);
>>>>>>> redux
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
