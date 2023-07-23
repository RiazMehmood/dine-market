import { useDeleteDataInCartMutation } from "@/app/store/slices/services/cartapi";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const DeleteBtn = ({ id }: any) => {
  const [deleteCart, { error, isSuccess }] = useDeleteDataInCartMutation();

  // Function to handle the delete action
  const handleDeleteClick = () => {
    try {
      deleteCart(id);
      console.log("id value in delete btn", id);
      console.log("object deleted successfully");
      console.log("isSuccess", isSuccess)
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
