import { useState } from "react";

const Cart = ({ selectedCourse, totalPrice, totalCredit, totalRemaining }) => {
  const [credit, setCredit] = useState(0);

  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-[#2F80ED] font-bold text-lg">
          Credit Hour Remaining {totalRemaining} hr
        </h2>
        <hr />
        <h2 className="font-bold text-sm text-[#1C1B1B]">Course Name</h2>
        <ol>
          {selectedCourse.map((course, idx) => (
            <li key={idx}>{course.course_name}</li>
          ))}
        </ol>
        <hr />
        <h2 className="font-medium text-base text-[#1C1B1BCC]">
          Total Credit Hour :{totalCredit}
        </h2>
        <hr />
        <h2 className="font-semibold text-base text-[#1C1B1BCC]">
          Total Price : {totalPrice}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
