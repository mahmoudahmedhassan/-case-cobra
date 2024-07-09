import GlobalButton from "../button/Button"
import { FaLongArrowAltRight } from "react-icons/fa";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

function Header() {
  return (
    <header className=" w-full bg-white  sticky boxShadow ">
      <div className="container flex justify-between items-center h-[60px] sticky">
        <h1>logo</h1>
        <div>
          <ul className="flex items-center gap-8 capitalize sm:text-[12px] md:text-[16px]">
            <li className=" hover:bg-[#f5f5f5] p-1 hover:rounded ease-in-out duration-100 cursor-pointer"><RegisterLink>Sign up</RegisterLink> </li>
            <li className=" hover:bg-[#f5f5f5] p-1 hover:rounded ease-in-out duration-100 cursor-pointer"><LoginLink>login</LoginLink> </li>
            <li className="border-l pl-4 xs:hidden sm:block"><GlobalButton text="create case" icon={<FaLongArrowAltRight />}/></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
