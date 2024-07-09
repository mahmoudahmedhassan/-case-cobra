import Image from "next/image";
import { snake_2, user_1, user_3 } from "../../images/index";
import Stars from "../Stars";
import { FaCheck } from "react-icons/fa";

function Testimonials() {
  return (
    <section className=" bg-slate-50 grainy-dark flex-1">
      <div className="w-full container flex flex-col ">
        {/* heading */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-16 gap-8">
          <h1 className="text-center w-fit tracking-tight font-bold !leading-tight text-gray-900 text-3xl md:text-6xl lg:text-7xl">
            What our{" "}
            <span className="px-2 relative inline-block">
              Customers
              <svg
                viewBox="0 0 687 155"
                className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-[#E91E63]"
              >
                <g
                  stroke="currentColor"
                  strokeWidth="7"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"
                    opacity=".3"
                  ></path>
                  <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
                </g>
              </svg>
            </span>{" "}
            Say
          </h1>
          <div className="w-[100px] h-[100px]">
            <Image className="w-full h-full" src={snake_2} alt="snake_2" />
          </div>
        </div>

        {/* comments */}
        <div className="flex flex-col lg:flex-row gap-8 mt-16 mb-16 justify-center items-center">

          <div className="flex flex-col gap-4 mb-16 ">
            <Stars />
            <p className="mt-4 mb-8 sm:text-lg md:text-2xl">
              "The case feels durable and I even got a compliment on the design.
              Had the case for two and a half months now and{" "}
              <mark className="bg-[#E91E63] text-white">the image is super clear</mark>, on the case I had before,
              the image started fading into yellow-ish color after a couple
              weeks. Love it."
            </p>
            <div className="flex items-center gap-4">
              <Image
                className="w-[40px] h-[40px] rounded-full"
                src={user_1}
                alt="user"
              />
              <div className="flex flex-col">
                <h3>Jonathan</h3>
                <p className="flex items-center gap-2">
                  {" "}
                  <FaCheck className="text-[#E91E63]" /> Verified Purchase
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-16">
            <Stars />
            <p className="mt-4 mb-8  text-lg md:text-2xl">
              "I usually keep my phone together with my keys in my pocket and
              that led to some pretty heavy scratchmarks on all of my last phone
              cases. This one, besides a barely noticeable scratch on the
              corner,<mark className="bg-[#E91E63] text-white">looks brand new after about half a year</mark> . I dig it."
            </p>
            <div className="flex items-center gap-4">
              <Image
                className="w-[40px] h-[40px] rounded-full"
                src={user_3}
                alt="user"
              />
              <div className="flex flex-col">
                <h3>Josh</h3>
                <p className="flex items-center gap-2">
                  {" "}
                  <FaCheck className="text-[#E91E63]" /> Verified Purchase
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
