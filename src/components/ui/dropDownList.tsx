import { UserButton } from "@clerk/nextjs";
import Cart from "./Cart";
import { NavbarData, Nav } from "./navData";
import Link from "next/link";

interface DropDownListProps {
  navbar: boolean;
  setNavbar: (value: boolean) => void;
}

const DropDownList: React.FC<DropDownListProps> = ({ navbar, setNavbar }) => {
  return (
    <div className="max-w-sm ml-auto -mt-4 sm:-mt-10 md:-mt-10">

    <div className="flex flex-col items-center space-y-6 mx-10 duration-500 rounded-xl p-4  bg-slate-100">
      {NavbarData.map((item: Nav) => (
          <Link
          key={item.title}
          href={item.href}
          onClick={() => setNavbar(!navbar)}
          >
          {item.title}
        </Link>
      ))}
      <Cart />
      <UserButton />
    </div>
      </div>
  );
};

export default DropDownList;
