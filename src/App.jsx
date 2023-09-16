import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSelectedCourse = (course) => {
    const { price } = course;
    let totalPrice = price;
    console.log(totalPrice);
    const isEexist = selectedCourse.find(
      (checkEexist) => checkEexist.id === course.id
    );
    if (isEexist) {
      return alert("Already Added");
    } else {
      selectedCourse.forEach((item) => (totalPrice = totalPrice + item.price));
      setTotalPrice(totalPrice);
      setSelectedCourse([...selectedCourse, course]);
    }
  };
  console.log(selectedCourse);
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl text-center my-6">
        Course Registration
      </h1>
      <div className="flex gap-5 ">
        <Cards handleSelectedCourse={handleSelectedCourse}></Cards>
        <div>
          <Cart selectedCourse={selectedCourse} totalPrice={totalPrice}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
