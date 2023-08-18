import React from "react";
import Image from "next/image";
import Link from "next/link";
function Nav_Left() {
  return (
    <Link href={"/"} className="w-auto h-auto flex flex-row items-center">
      <Image
        src={"/IMG-20230712-WA0019.jpg"}
        width={40}
        height={40}
        style={{borderRadius: '45%'}}
        alt="GLOBAL IT SOLUTIONS"
        className="  cursor-pointer  hover:animate-slowspin  "
      />
      <span
        id="cursive"
        className=" font-bold  text-gray-300  ml-[10px] hidden 310:flex "
      >
        GLOBAL IT SOLUTIONS
      </span>
    </Link>
  );
}

export default Nav_Left;
