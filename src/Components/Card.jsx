import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
const Card = ({ card, handleSelectedCourse }) => {
  const { image, course_name, price } = card;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course_name}</h2>
        <p className="text-[#1C1B1B99] font-normal">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex px-1 my-3">
          <div className="flex items-center flex-1 gap-2">
            <FiDollarSign className="h-6 w-6" />
            <p className="text-[#1C1B1B99] font-medium text-base">
              Price : {price}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GoBook className="h-6 w-6" />
            <p className="text-[#1C1B1B99] font-medium text-base">
              Credit : 1hr
            </p>
          </div>
        </div>
        <button
          onClick={handleSelectedCourse}
          className="btn bg-[#2F80ED] text-white font-semibold"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
