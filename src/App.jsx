import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(20);
  const handleSelectedCourse = (course) => {
    const { price, credit } = course;
    let totalPrice = price;
    let totalCredit = parseInt(credit);
    const isEexist = selectedCourse.find(
      (checkEexist) => checkEexist.id === course.id
    );
    if (isEexist) {
      return toast.error("Already Added this course", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      selectedCourse.forEach((item) => {
        totalPrice = totalPrice + item.price;
        totalCredit = totalCredit + parseInt(item.credit);
      });
      const totalRemaining = 20 - totalCredit;
      setTotalPrice(totalPrice);
      if (totalCredit > 20) {
        return toast.error("Your Total Credit Limit Is 20 hr", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      setTotalCredit(totalCredit);
      setTotalRemaining(totalRemaining);
      setSelectedCourse([...selectedCourse, course]);
    }
  };
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl text-center py-6">
        Course Registration
      </h1>
      <div className="md:flex gap-5 ">
        <Cards handleSelectedCourse={handleSelectedCourse}></Cards>
        <div>
          <Cart
            selectedCourse={selectedCourse}
            totalPrice={totalPrice}
            totalCredit={totalCredit}
            totalRemaining={totalRemaining}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
