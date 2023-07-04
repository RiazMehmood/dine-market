import { Trash2 } from "lucide-react";


interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number | undefined;
}

const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <div className="w-6 h-6 bg-red-400 flex justify-center rounded-md text-lg items-center text-white">

      <button onClick={props.onDecrease}>
        {props.qty === 1 ? <Trash2 className="text-black overflow-hidden bg-white"/> : "-"}
      </button>
      </div>
      <p>{props.qty}</p>
      <div className="w-6 h-6 bg-blue-400 flex justify-center rounded-md text-lg items-center text-white">

      <button onClick={props.onIncrease}>+</button>
      </div>
    </div>
  );
};

export default QtyBtn;
