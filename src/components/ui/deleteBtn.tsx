"use client";

import { Trash2 } from "lucide-react";

const DeleteBtn = ({ id }: any) => {
  const deleteProducts = async () => {
    console.log(id);

    try {
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
    }
  };

  return (
    <div>
      <button onClick={deleteProducts}>
        <Trash2 />
      </button>
    </div>
  );
};

export default DeleteBtn;
