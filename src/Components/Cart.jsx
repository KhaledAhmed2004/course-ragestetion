const Cart = ({ selectedCourse }) => {
  console.log(selectedCourse);
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-[#2F80ED] font-bold text-lg">
          Credit Hour Remaining 7 hr
        </h2>
        <hr />
        <h2 className="font-bold text-sm text-[#1C1B1B]">Course Name</h2>
        <ol>
          {selectedCourse.map((course) => (
            <li key={course.id}>{course.course_name}</li>
          ))}
        </ol>
        <hr />
        <h2 className="font-medium text-base text-[#1C1B1BCC]">
          Total Credit Hour : 13
        </h2>
        <hr />
        <h2 className="font-semibold text-base text-[#1C1B1BCC]">
          Total Price : 48000 USD
        </h2>
      </div>
    </div>
  );
};

export default Cart;
