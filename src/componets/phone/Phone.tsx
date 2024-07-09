import { phone_template_dark_edges } from "@/images";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface phoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark: boolean;
  className: string;
}

function Phone({ imgSrc, dark }: phoneProps) {
  return <div className="relative pointer-events-none z-50 overflow-hidden w-64 ">
         <Image className="h-[500px] fill={true} pointer-events-none z-50 select-none rounded-[40px]" src = {dark ? phone_template_dark_edges:phone_template_dark_edges} alt="phone template"/>
         <Image className="absolute fill={true} inset-0 h-[500px] z-[-10] object-cover min-w-full min-h-full rounded-[40px] " src={imgSrc} alt="test"/>
     
 </div>;
}

export default Phone;
