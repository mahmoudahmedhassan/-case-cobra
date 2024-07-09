import {
    testimonials_1,
    testimonials_2,
    testimonials_3,
    testimonials_4,
    testimonials_5,
    testimonials_6,
    what_people_are_buying

     
  } from "../../images/index";
import ReviewGrid from "./ReviewGrid";

const data = [
  testimonials_1.src,
  testimonials_2.src,
  testimonials_3.src,
  testimonials_4.src,
  testimonials_5.src,
  testimonials_6.src,
];
function Review() {

  return (
  <div className="relative max-w-5xl">
  <img
    aria-hidden="true"
    src={what_people_are_buying.src}
    className="absolute select-none hidden xl:block -left-32 top-1/3"
    alt="what people are buying"
  />

  <ReviewGrid data={data} />
</div>
 )
}

export default Review;
