
interface IProps {
  num: number;
  setNum?: (value: number | ((prevVar: number) => number)) => void;
}

const IncreDecreBtn = ({ num, setNum }: IProps) => {
  const incre = () => {
    if (num < 10 && setNum) {
      setNum(num + 1);
    }
  };

  const decre = () => {
    if (num > 1 && setNum) {
      setNum(num - 1);
    }
  };
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decre}
        className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
      >
        -
      </button>
      <p className="">{num}</p>
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
