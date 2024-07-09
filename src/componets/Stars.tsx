import { FaStar } from "react-icons/fa"

 
function Stars() {
  return (
    <div>
    <ul className="flex gap-1 list-none text-[#E91E63]	">
      <li>
        <FaStar className="" />
      </li>
      <li>
        <FaStar />
      </li>
      <li>
        <FaStar />
      </li>
      <li>
        <FaStar />
      </li>
      <li>
        <FaStar />
      </li>
    </ul>
  </div>
  )
}

export default Stars