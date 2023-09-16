import "./App.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl text-center my-6">
        Course Registration
      </h1>
      <div className="flex gap-5 ">
        <div className="grid grid-cols-3 gap-5 pb-5 flex-1">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
