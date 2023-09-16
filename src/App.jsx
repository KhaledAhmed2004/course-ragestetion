import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const handleSelectedCourse = (card) => {
    setSelectedCourse([...selectedCourse, card]);
  };
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl text-center my-6">
        Course Registration
      </h1>
      <div className="flex gap-5 ">
        <Cards handleSelectedCourse={handleSelectedCourse}></Cards>
        <div>
          <Cart selectedCourse={selectedCourse}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
