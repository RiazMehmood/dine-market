"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

function Dropdown() {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Link href="/category/Male">
              <div
                onClick={Dropdown}
                className="px-2 py-3 flex-wrap font-semibold text-blue-500 md:text-black/60 md:py-0 "
              >
                Male
              </div>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <div
              onClick={Dropdown}
              className="px-2 py-3 font-semibold text-blue-500 md:text-black/60 md:py-0"
            >
              <Link href="/category/Female">Female</Link>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <div
              onClick={Dropdown}
              className="px-2 py-3 font-semibold text-blue-500 md:text-black/60 md:py-0"
            >
              <Link href="/category/Kids">Kids</Link>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <div
              onClick={Dropdown}
              className="px-2 py-3 font-semibold text-blue-500 md:text-black/60 md:py-0"
            >
              <Link href="/products">All Products</Link>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
export default Dropdown;
