import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import {
  testimonials_1,
  user_1,
  user_2,
  user_3,
  user_4,
  user_5,
  snake_1,
  line,
  arrow,
  your_image,
} from "../../images/index";
import Image from "next/image";
import Phone from "../phone/Phone";
import Stars from "../Stars";

function Hero() {
  return (
    <section className=" flex   flex-col  bg-slate-50 grainy-light">
      <div className="container pb-24 xs:pt-[6rem] md:pt-[13rem] flex xs:flex-col lg:flex-row justify-center items-center gap-6">
        <div className="xs:w-full lg:w-[70%] relative mb-24 ">
          <div className="absolute w-28 left-0 top-[-160px] hidden md:block ">
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28"></div>
            <Image
              className="h-[150px] w-[150px]"
              src={snake_1}
              alt="snake_1"
            />
          </div>
          <h1 className="xs:text-2xl md:text-6xl font-bold">
            Your Image on a <span className="text-[#E91E63]">Custom</span> Phone
            Case
          </h1>
          <p className="mt-5 ">
            Capture your favorite memories with your own, one-of-one phone case.
          </p>
          <p>
            CaseCobra allows you to protect your memories, not just your phone
            case.
          </p>

          <div className="mt-10">
            <p className="flex gap-2">
              <FaCheck className="text-[#E91E63]" />{" "}
              <span>High-quality, durable material</span>
            </p>
            <p className="flex gap-2">
              <FaCheck className="text-[#E91E63]" />
              <span>5 year print guarantee</span>
            </p>
            <p className="flex gap-2">
              <FaCheck className="text-[#E91E63]" />
              <span> Modern iPhone models supported</span>
            </p>
          </div>

          <div className="flex xs:flex-col md:flex-row gap-6 mt-10">
            <ul className="flex list-none -space-x-4  ">
              <li>
                <Image
                  className="w-[40px] h-[40px] rounded-[50%] border-solid border-2 border-[#E91E63]"
                  src={user_1}
                  alt="users"
                />
              </li>
              <li>
                <Image
                  className="w-[40px] h-[40px] rounded-[50%] border-solid border-2 border-[#E91E63]"
                  src={user_2}
                  alt="users"
                />
              </li>
              <li>
                <Image
                  className="w-[40px] h-[40px] rounded-[50%] border-solid border-2 border-[#E91E63]"
                  src={user_3}
                  alt="users"
                />
              </li>
              <li>
                <Image
                  className="w-[40px] h-[40px] rounded-[50%] border-solid border-2 border-[#E91E63]"
                  src={user_4}
                  alt="users"
                />
              </li>
              <li>
                <Image
                  className="w-[40px] h-[40px] rounded-[50%] border-solid border-2 border-[#E91E63]"
                  src={user_5}
                  alt="users"
                />
              </li>
            </ul>
            <div>
              <Stars/>
              <p className="font-[400]">1.250 happy customers</p>
            </div>
          </div>
        </div>
        <div className="xs:w-full lg:w-[30%] flex justify-center items-center">
          <div className="relative md:max-w-xl">
            <Image
              src={your_image}
              alt="arrow"
              className=" hidden lg:block  h-[150px] w-[150px] absolute top-[-80px] right-[-100px] "
            />
            <Image
              src={line}
              alt="line"
              className="h-[170px] w-[100px] absolute left-[-21px] bottom-[-23px]"
            />

            <Phone imgSrc={testimonials_1} dark={true} className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
