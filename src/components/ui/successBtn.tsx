import Link from "next/link";

const SuccessBtn = () => {
    
return (
    <div>
    <Link href={"/products"}>
        <button className="w-44 h-8 bg-slate-700 hover:bg-slate-900 text-white my-6 rounded-md">
        Want to Shop More
        </button>
    </Link>
    </div>
);
};

export default SuccessBtn;
